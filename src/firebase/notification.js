// import firebase, { RemoteMessage } from 'react-native-firebase';

// const UPDATE_QR_TOPIC ="UPDATE_QR_TOPIC";

// export const fcmUpdateQR = async () => {
//     const enabled = await firebase.messaging().hasPermission();
//     if (enabled) {
//         // user has permissions
//         console.log('Co quyen nhan noti');
//     } else {
//         // user doesn't have permission
//         try {
//             await firebase.messaging().requestPermission();
//             // User has authorised
//             console.log('co quyen roi xin hoai');
//         } catch (error) {
//             // User has rejected permissions
//             console.log(error);
//         }
//     }

//     firebase.messaging().subscribeToTopic(UPDATE_QR_TOPIC);

//     var mess =  firebase.messaging().onMessage((message: RemoteMessage) => {
//         // Process your message as required
//         console.log("message",message);
//     });
//     mess();
// }
