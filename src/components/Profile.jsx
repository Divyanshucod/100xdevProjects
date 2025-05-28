export function Profile() {
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          backgroundColor: "#23C5D9",
          height: "30%",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "1px solid black",
            position: "absolute",
            top: "-35%",
            left: "39%",
            backgroundColor: "white",
            backgroundImage: "url('/81.jpg')",
            backgroundSize: "cover", // 🔥 Fits the image nicely
            backgroundPosition: "center", // 👌 Keeps image centered
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <p
            style={{
              color: "#222222",
            }}
          >
            Rita Correia <span>32</span>
          </p>
          <span
            style={{
              color: "#999999",
            }}
          >
            London
          </span>
        </div>
      </div>
      <div
        style={{
          height: "30%",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderTop: "1px solid gray",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#000000",
            }}
          >
            80K
          </span>
          <span
            style={{
              color: "#999999",
            }}
          >
            Follower
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#000000",
            }}
          >
            803K
          </span>
          <span
            style={{
              color: "#999999",
            }}
          >
            Likes
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#000000",
            }}
          >
            1.4K
          </span>
          <span
            style={{
              color: "#999999",
            }}
          >
            Posts
          </span>
        </div>
      </div>
    </div>
  );
}
