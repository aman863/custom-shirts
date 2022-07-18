const { initializeApp } = require("firebase/app");
const serviceAccount = require("./ezyfi-184d0-firebase-adminsdk-by7q3-6f886046f1.json");
const router = require('express').Router(); // eslint-disable-line new-cap
const { getStorage, ref, uploadString, uplo, uploadBytes } = require('firebase/storage');


router.post('/upload', async (request, response) => {
  const buffer = new Buffer(
    request.body.imageData.replace(/^data:image\/\w+;base64,/, ''), 'base64'
  );
  const firebaseConfig = {
    apiKey: '6f886046f196b68ef02741fce5eac45c8aa85292',
    authDomain: 'https://accounts.google.com/o/oauth2/auth',
    storageBucket: 'ezyfi-184d0.appspot.com',
    projectId: 'ezyfi-184d0',
  };
  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);
  const storageRef = ref(storage, request.body.fileName);
  console.log(buffer);
  const res = await uploadBytes(storageRef, buffer);
  // const currentDate = Date.now().toLocaleString();
  // const data = {
  //   Key: `${request.body.fileName}_${currentDate}`,
  //   ACL: 'public-read',
  //   Body: buffer,
  //   ContentEncoding: 'base64',
  //   ContentType: 'image/jpeg',
  // };
  // s3Bucket.putObject(data, (err, responseData) => {
  //   if (err) {
  //     console.log(err);
  //     response.status(400).end();
  //   } else {
  //     response.status(200).json({ responseData, url: `https://s3.amazonaws.com/shirts.qthreads/${request.body.fileName}_${currentDate}` });
  //   }
  // });
  // const storageRef = storage.child(request.body.fileName);
  // const snapshot = await storageRef.put(buffer);
  //       // Step 3. Grab the public url
  // const downloadURL = await snapshot.ref.getDownloadURL();
  response.status(200).json({ status: 'okay', url: `https://firebasestorage.googleapis.com/v0/b/ezyfi-184d0.appspot.com/o/${request.body.fileName}?alt=media&token=1d10ea4a-0ac8-4b58-a3f9-6dfaa7de5a27` });
});

module.exports = router;
