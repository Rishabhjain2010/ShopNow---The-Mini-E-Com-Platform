function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function resolveIdentifier(email, mobile) {
  if (email) return email.trim();
  if (mobile) return mobile.toString().trim();
  throw new Error('Email or mobile is required');
}

module.exports = {
  generateOTP,
  resolveIdentifier
};
