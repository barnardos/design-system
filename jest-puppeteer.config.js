module.exports = {
  launch: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  },
  server: {
    command: "npm run build-serve",
    port: 8000,
    launchTimeout: 100000,
    debug: true
  }
};
