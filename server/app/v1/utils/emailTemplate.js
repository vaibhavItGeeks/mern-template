
exports.forget = (email,link)=>{
    return {
        from: process.env.SMTP_USER,
        to:email,
        subject: "Reset Your Password", 
        text: "Reset Your Password", 
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">Reset Your Itgeeks Admin Panel Account Password</h2>
          <p style="color: #555;">Dear User,</p>
          <p style="color: #555;">You have requested to reset your Itgeeks Admin Panel account password.</p>
          <p style="color: #555;">To reset your password, please click the following link:</p>
          <p style="color: #555; margin-top: 10px;"><a href="${link}" style="color: #007bff; text-decoration: none;">Reset Password</a></p>
          <p style="color: #555;">If you did not request this password reset, please ignore this email.</p>
          <p style="color: #555;">Thank you,<br/>The Itgeeks Admin Panel Team</p>
        </div>
      </div>`, 
    }
}