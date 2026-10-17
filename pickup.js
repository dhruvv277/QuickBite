const PICKUP_TIMES = [
    "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30"
  ];
  
  function renderPickupTimes() {
    const select = document.getElementById("pickup-time");
    select.innerHTML = '<option value=""> choose time </option>';
  
    for (let i = 0; i < PICKUP_TIMES.length; i++) {
      const time = PICKUP_TIMES[i];
      select.innerHTML += '<option value="' + time + '">' + time + '</option>';
    }
  }

  function RestorePickupTime(){

  }
  
  document.addEventListener("DOMContentLoaded", function () {
    renderPickupTimes();
  });