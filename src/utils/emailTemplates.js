export const projectInvitationTemplate = (project, token) => {
  const confirmationUrl = `${
    process.env.BASE_URL || "http://localhost:3000"
  }/api/project/accept-invitation/${token}`;

  return `
    <!--
    * This email was built for Task Manager Project Invitations
    -->
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
    <title>You're invited to join ${project.name}</title>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--[if !mso]>-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width=device-width" name="viewport" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
    <style type="text/css">
    table {
    border-collapse: separate;
    table-layout: fixed;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt
    }
    table td {
    border-collapse: collapse
    }
    .ExternalClass {
    width: 100%
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
    line-height: 100%
    }
    body, a, li, p, h1, h2, h3 {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    }
    html {
    -webkit-text-size-adjust: none !important
    }
    body {
    min-width: 100%;
    Margin: 0px;
    padding: 0px;
    }
    body, #innerTable {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
    }
    #innerTable img+div {
    display: none;
    display: none !important
    }
    img {
    Margin: 0;
    padding: 0;
    -ms-interpolation-mode: bicubic
    }
    h1, h2, h3, p, a {
    line-height: inherit;
    overflow-wrap: normal;
    white-space: normal;
    word-break: break-word
    }
    a {
    text-decoration: none
    }
    h1, h2, h3, p {
    min-width: 100%!important;
    width: 100%!important;
    max-width: 100%!important;
    display: inline-block!important;
    border: 0;
    padding: 0;
    margin: 0
    }
    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important
    }
    u + #body a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    }
    a[href^="mailto"],
    a[href^="tel"],
    a[href^="sms"] {
    color: inherit;
    text-decoration: none
    }
    </style>
    <style type="text/css">
    @media (min-width: 481px) {
    .hd { display: none!important }
    }
    </style>
    <style type="text/css">
    @media (max-width: 480px) {
    .hm { display: none!important }
    }
    </style>
    <style type="text/css">
    @media (max-width: 480px) {
    .t35,.t40{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t36{padding-top:43px!important;border:0!important;border-radius:0!important}.t30{mso-line-height-alt:26px!important;line-height:26px!important}
    }
    </style>
    <!--[if !mso]>-->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&amp;family=Albert+Sans:wght@500&amp;display=swap" rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    <body id="body" class="t43" style="min-width:100%;Margin:0px;padding:0px;background-color:#F9F9F9;">
    <div class="t42" style="background-color:#F9F9F9;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center">
    <tr><td class="t41" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F9F9F9;background-image:none;background-repeat:repeat;background-size:auto;background-position:center top;" valign="top" align="center">
    <!--[if mso]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
    <v:fill color="#F9F9F9"/>
    </v:background>
    <![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable">
    <tr><td><div class="t35" style="mso-line-height-rule:exactly;mso-line-height-alt:70px;line-height:70px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>
    <tr><td align="center">
    <table class="t39" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <tr><td width="400" class="t38" style="width:400px;">
    <table class="t37" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
    <tr><td class="t36" style="border:1px solid #CECECE;overflow:hidden;background-color:#FFFFFF;padding:50px 40px 40px 40px;border-radius:20px 20px 20px 20px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">
    
    <!-- Logo/Icon Section -->
    <tr><td align="center">
    <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <tr><td width="60" class="t3" style="width:60px;">
    <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
                   <tr><td class="t1" style="text-align: center;">
     <div style="background: #4f8cff; color: white; border-radius: 50%; width: 60px; height: 60px; margin: 0 auto; line-height: 60px; font-size: 24px; font-weight: bold; font-family: Inter, sans-serif; text-align: center;">
     TM
     </div>
     </td></tr></table>
    </td></tr></table>
    </td></tr>
    
    <!-- Spacing -->
    <tr><td><div class="t5" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>
    
    <!-- Heading -->
    <tr><td align="center">
    <table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <tr><td width="318" class="t9" style="width:339px;">
    <table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
    <tr><td class="t7">
         <h1 class="t6" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:28px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.2px;direction:ltr;color:#111111;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
     You're invited!
     </h1>
    </td></tr></table>
    </td></tr></table>
    </td></tr>
    
    <!-- Spacing -->
    <tr><td><div class="t12" style="mso-line-height-rule:exactly;mso-line-height-alt:17px;line-height:17px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>
    
    <!-- Description -->
    <tr><td align="center">
    <table class="t16" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <tr><td width="308" class="t15" style="width:320px;">
    <table class="t14" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
    <tr><td class="t13">
         <p class="t11" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;letter-spacing:-0.6px;direction:ltr;color:#424040;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">
     <strong>${
       project.owner && project.owner.name ? project.owner.name : "Someone"
     }</strong> has invited you to join this project.${
    project.description ? " " + project.description + "." : ""
  } Click the button below to accept and start collaborating.
     </p>
    </td></tr></table>
    </td></tr></table>
    </td></tr>
    
    <!-- Spacing -->
    <tr><td><div class="t18" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>
    
    <!-- Button -->
    <tr><td align="center">
    <table class="t22" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <tr><td width="180" class="t21" style="width:180px;">
    <table class="t20" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
    <tr><td class="t19" style="overflow:hidden;background-color:#4f8cff;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:8px;border-radius:8px 8px 8px 8px;">
    <a class="t17" href="${confirmationUrl}" style="display:block;margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:700;font-style:normal;font-size:15px;text-decoration:none;letter-spacing:-0.5px;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:8px;" target="_blank">
    Accept Invitation
    </a>
    </td></tr></table>
    </td></tr></table>
    </td></tr>
    
    <!-- Spacing -->
    <tr><td><div class="t24" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>
    
         <!-- Team Info and Footer -->
     <tr><td align="center">
     <table class="t28" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
     <tr><td width="318" class="t27" style="width:318px;">
     <table class="t26" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
     <tr><td class="t25">
     <p class="t23" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.3px;direction:ltr;color:#424040;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">
     ${
       project.members && project.members.length
         ? `Join ${project.members.length} other ${
             project.members.length === 1 ? "member" : "members"
           } already working on this project. `
         : ""
     }If you didn't expect this invitation, you can safely ignore this email.
     </p>
     </td></tr></table>
     </td></tr></table>
     </td></tr>
     
     <!-- Spacing -->
     <tr><td><div class="t30" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>
     
     <!-- Footer Info -->
     <tr><td align="center">
     <table class="t34" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
     <tr><td width="318" class="t33" style="width:320px;">
     <table class="t32" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
     <tr><td class="t31" style="overflow:hidden;background-color:#F2F2F2;padding:20px 30px 20px 30px;border-radius:8px 8px 8px 8px;">
     <p class="t29" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:18px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#84828E;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">
     This invitation expires in 7 days.<br><br>
     Having trouble? Copy this link: ${confirmationUrl}
     </p>
     </td></tr></table>
     </td></tr></table>
     </td></tr>
    
    </table>
    </td></tr></table>
    </td></tr></table>
    </td></tr>
    <tr><td><div class="t40" style="mso-line-height-rule:exactly;mso-line-height-alt:70px;line-height:70px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>
    </table>
    </td></tr></table>
    </div>
    <div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
    </body>
    </html>
  `;
};
