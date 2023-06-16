import React, { useEffect } from "react";

export const Counter = () => {
  useEffect(() => {
    function counterClock() {
      var t = document.querySelectorAll("[data-countdown]");

      function n(t, e) {
        var a = new Date(t) - new Date().getTime();
        if (a < 0) {
          a = -a;
        }
        var o = Math.floor(a / 864e5);
        o = (o < 10 ? "0" : "") + o;
        var n = Math.floor((a % 864e5) / 36e5);
        n = (n < 10 ? "0" : "") + n;
        var l = Math.floor((a % 36e5) / 6e4);
        l = (l < 10 ? "0" : "") + l;
        var i = Math.floor((a % 6e4) / 1e3);
        i = (i < 10 ? "0" : "") + i;
        (e.querySelector("[data-days]").innerHTML = (t < new Date().getTime() ? "-" : "") + o),
        (e.querySelector("[data-hours]").innerHTML = (t < new Date().getTime() ? "-" : "") + n),
        (e.querySelector("[data-minutes]").innerHTML = (t < new Date().getTime() ? "-" : "") + l),
        (e.querySelector("[data-seconds]").innerHTML = (t < new Date().getTime() ? "-" : "") + i);
      }
      t.length &&
        [].forEach.call(t, function (t) {
          var e, a, o;
          (a = (e = t).dataset.date),
            n((o = new Date(a).getTime()), e),
            setInterval(function () {
              n(o, e);
            }, 1e3);
        });
    }
    counterClock();
  }, []);
  return (
    <div
      className="d-flex mb-9"
      data-countdown
      data-date="May 20, 2023 15:37:25"
    >
      <div className="text-center">
        <div className="font-size-h1 font-weight-bolder text-primary" data-days>
          00
        </div>
        <div className="heading-xxs text-muted">Days</div>
      </div>
      <div className="px-1 px-md-4">
        <div className="font-size-h2 font-weight-bolder text-primary">:</div>
      </div>
      <div className="text-center">
        <div
          className="font-size-h1 font-weight-bolder text-primary"
          data-hours
        >
          00
        </div>
        <div className="heading-xxs text-muted">Hours</div>
      </div>
      <div className="px-1 px-md-4">
        <div className="font-size-h2 font-weight-bolder text-primary">:</div>
      </div>
      <div className="text-center">
        <div
          className="font-size-h1 font-weight-bolder text-primary"
          data-minutes
        >
          00
        </div>
        <div className="heading-xxs text-muted">Minutes</div>
      </div>
      <div className="px-1 px-md-4">
        <div className="font-size-h2 font-weight-bolder text-primary">:</div>
      </div>
      <div className="text-center">
        <div
          className="font-size-h1 font-weight-bolder text-primary"
          data-seconds
        >
          00
        </div>
        <div className="heading-xxs text-muted">Seconds</div>
      </div>
    </div>
  );
};
