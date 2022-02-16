import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import { useMediaQuery } from "react-responsive";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid rgba(0, 0, 0, .25)`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(223,215,213,255)",
  flexDirection: "row",
  direction: "rtl",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .25)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(null);
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
          height: "300px",
          backgroundPosition: "center",
        }}
      ></div>
      <Accordion
        className="Slot"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ fontWeight: "700" }}>
            האם המוצרים מתאימים גם לתינוקות מתחת לגיל שנה?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="InnerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="Slot"
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ fontWeight: "700" }}>
            אני מעוניין במוצר שכרגע לא קיים במלאי. מה ניתן לעשות?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="InnerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="Slot"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{ fontWeight: "700" }}>
            האם יש מבצעים ברכישת מספר מוצרים?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="InnerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="Slot"
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography style={{ fontWeight: "700" }}>
            האם ניתן לבצע איסוף עצמי?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="InnerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className="Slot"
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography style={{ fontWeight: "700" }}>
            האם ניתן לבטל עסקה או מוצר מסוים לאחר ביצוע הזמנה?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="InnerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className="Slot"
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography style={{ fontWeight: "700" }}>
            כמה עולה משלוח עד הבית?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="InnerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={{ backgroundColor: "rgba(223,215,213,255)" }}></div>
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
}
