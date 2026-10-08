const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: "public_unbYHCdgWxc/4yiPy8S01iB55cc=",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: "https://ik.imagekit.io/yuyuz98"
});

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") { res.status(200).end(); return; }

  try {
    const authParams = imagekit.getAuthenticationParameters();
    res.status(200).json(authParams);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
