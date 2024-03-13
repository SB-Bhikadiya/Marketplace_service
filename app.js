var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var acceptedNftsRouter = require("./routes/acceptedNFT");
var boughtNFTsRouter = require("./routes/boughtNFT");
var canceledOfferedNFTsRouter = require("./routes/canceledOfferedNFT");
var createdAuctionNFTsRouter = require("./routes/createdAuctionNFT");
var listedNFTsRouter = require("./routes/listedNFT");
var offeredNFTsRouter = require("./routes/offeredNFT");
var placedBidNFTsRouter = require("./routes/placedBidNFT");
var resultedAuctionNFTsRouter = require("./routes/resultedAuctionNFT");
var nftCollectionRouter = require("./routes/nftCollection");
var tokenModelRouter = require("./routes/token");
var usersRouter = require("./routes/users");
var metadataRouter = require("./routes/metadata");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/accepted", acceptedNftsRouter);
app.use("/bought", boughtNFTsRouter);
app.use("/canceled-offered", canceledOfferedNFTsRouter);
app.use("/created-auction", createdAuctionNFTsRouter);
app.use("/listed", listedNFTsRouter);
app.use("/offered", offeredNFTsRouter);
app.use("/placed-bid", placedBidNFTsRouter);
app.use("/resulted-auction", resultedAuctionNFTsRouter);
app.use("/collection", nftCollectionRouter);
app.use("/token", tokenModelRouter);
app.use("/metadata", metadataRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
