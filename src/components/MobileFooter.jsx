import * as React from "react";
import "./MobileFooter.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function MobileFooter() {
  return (
    <div>
      <div className="BottomContainer">
        <div className="Logo">Dasrhiz baby.</div>
        <div className="IconsContainer">
          <div className="SocialItem">
            <InstagramIcon />
          </div>
          <div className="SocialItem">
            <FacebookIcon />
          </div>
          <div className="SocialItem">
            <WhatsAppIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
