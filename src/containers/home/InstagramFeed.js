import React from "react";

const InstagramFeed = () => {
  var src_img="data:image/jpeg;base64,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";
  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/CHxHtszjay_/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version={12}
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          // margin: "1px",

          padding: 0,
          width: "calc(100% - 2px)",
          margin: "auto",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href="https://www.instagram.com/p/CHxHtszjay_/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  flexGrow: 0,
                  height: "40px",
                  marginRight: "14px",
                  width: "40px",
                }}
              />{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                {" "}
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    marginBottom: "6px",
                    width: "100px",
                  }}
                />{" "}
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    width: "60px",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "19% 0" }} />{" "}
            <div
              style={{
                display: "block",
                height: "50px",
                margin: "0 auto 12px",
                width: "50px",
              }}
            >
              <img src={src_img} height="65px"/>
            </div>
            <div style={{ paddingTop: "8px" }}>
              {" "}
              <div
                style={{
                  color: "#3897f0",
                  fontFamily: "Arial,sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 550,
                  lineHeight: "18px",
                }}
              >
                {" "}
                View this post on Instagram
              </div>
            </div>
            <div style={{ padding: "12.5% 0" }} />{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "14px",
                alignItems: "center",
              }}
            >
              <div>
                {" "}
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    height: "12.5px",
                    width: "12.5px",
                    transform: "translateX(0px) translateY(7px)",
                  }}
                />{" "}
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    height: "12.5px",
                    transform: "rotate(-45deg) translateX(3px) translateY(1px)",
                    width: "12.5px",
                    flexGrow: 0,
                    marginRight: "14px",
                    marginLeft: "2px",
                  }}
                />{" "}
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    height: "12.5px",
                    width: "12.5px",
                    transform: "translateX(9px) translateY(-18px)",
                  }}
                />
              </div>
              <div style={{ marginLeft: "8px" }}>
                {" "}
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    flexGrow: 0,
                    height: "20px",
                    width: "20px",
                  }}
                />{" "}
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "2px solid transparent",
                    borderLeft: "6px solid #f4f4f4",
                    borderBottom: "2px solid transparent",
                    transform:
                      "translateX(16px) translateY(-4px) rotate(30deg)",
                  }}
                />
              </div>
              <div style={{ marginLeft: "auto" }}>
                {" "}
                <div
                  style={{
                    width: "0px",
                    borderTop: "8px solid #F4F4F4",
                    borderRight: "8px solid transparent",
                    transform: "translateY(16px)",
                  }}
                />{" "}
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    flexGrow: 0,
                    height: "12px",
                    width: "16px",
                    transform: "translateY(-4px)",
                  }}
                />{" "}
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid #F4F4F4",
                    borderLeft: "8px solid transparent",
                    transform: "translateY(-4px) translateX(8px)",
                  }}
                />
              </div>
            </div>
          </a>{" "}
          <p style={{ margin: "8px 0 0 0", padding: "0 4px" }}>
            {" "}
            <a
              href="https://www.instagram.com/p/CHxHtszjay_/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                color: "#000",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
                textDecoration: "none",
                wordWrap: "break-word",
              }}
              target="_blank"
            >
              Jewellery for your EveryDay Wear Get Flat 25% OFF To explore more
              styles, click on the link in bio. DM for enquries. #Stylori
              #jewellery #Jewellerylover #Styles #accessories #fashion #gold
              #goldjewellery #shopping #onlineshopping #DiamondJewellery
              #styletip #girlsbestfriend #ringsforsale #instajewellery
              ShopNow@https://www.stylori.com/jewellery
            </a>
          </p>{" "}
          <p
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial,sans-serif",
              fontSize: "14px",
              lineHeight: "17px",
              marginBottom: 0,
              marginTop: "8px",
              overflow: "hidden",
              padding: "8px 0 7px",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            A post shared by{" "}
            <a
              href="https://www.instagram.com/p/CHxHtszjay_/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
              }}
              target="_blank"
            >
              {" "}
              Stylori
            </a>{" "}
            (@stylorilove) on{" "}
            <time
              style={{
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                lineHeight: "17px",
              }}
              dateTime="2020-09-16T10:04:15+00:00"
            >
              Sep 16, 2020 at 3:04am PDT
            </time>
          </p>
        </div>
      </blockquote>
    </div>
  );
};
export default InstagramFeed;
