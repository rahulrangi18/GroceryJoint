import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  main: {
    marginTop: "1em",
    paddingTop: "1em",
    /*   position: "absolute", */
    bottom: 0,
    width: "100%",
    backgroundColor: "#877a7a",
    marginBottom: "-6.5em",
  },
  a : {
  color: "black",
},
});
const FooterPagePro = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <MDBFooter className="font-small pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Company name
              </h6>
              <p>
                Here you can use rows and columns here to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                For Restaurants
              </h6>
              <p>
                <a
                  href="https://www.zomato.com/partner_with_us"
                  className={classes.a}
                  target="_blank"
                >
                  Add Restaurants
                </a>
              </p>
              <p>
                <a
                  href="https://www.zomato.com/business/apps"
                  target="_blank"
                  className={classes.a}
                >
                  Business App
                </a>
              </p>
              <p>
                <a
                  href="https://www.zomato.com/business/widgets"
                  target="_blank"
                  className={classes.a}
                >
                  Restaurants Widgets
                </a>
              </p>
              <p>
                <a
                  href="https://www.zomato.com/business/apps"
                  target="_blank"
                  className={classes.a}
                >
                  Products for Business
                </a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="#!" className={classes.a}>
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" className={classes.a}>
                  Recent Orders
                </a>
              </p>
              <p>
                <a href="#!" className={classes.a}>
                  Offers
                </a>
              </p>
              <p>
                <a href="#!" className={classes.a}>
                  Help
                </a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fa fa-home mr-3" /> Ranchi,Jharkhand,India
              </p>
              <p>
                <i className="fa fa-envelope mr-3" />
                help@groceryjoint.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print mr-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:
                <a
                  href="http://iiitsurat.ac.in/"
                  target="_blank"
                  className={classes.a}
                >
                  GroceryJoint
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
};

export default FooterPagePro;
