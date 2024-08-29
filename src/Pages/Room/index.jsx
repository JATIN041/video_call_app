import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function RoomPage() {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appId = 177398072;
        const ServerSecret = "837efffff4d00cfc9ea9f6e8f0b8cfd9";
        const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            ServerSecret,
            roomId,
            Date.now().toString(),
            "jatin patil"
        );

        const zc = ZegoUIKitPrebuilt.create(KitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy link",
                    url: `https://video-call.vercel.app/room/${roomId}`, // Replace with your live URL
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            serverUrl: "wss://webliveroom177398072-api-bak.coolzcloud.com/ws"  // Ensure this is correctly configured
        });
    };

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
}

export default RoomPage;
