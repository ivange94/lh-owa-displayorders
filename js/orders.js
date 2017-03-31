$(document).ready(function() {

  var ordersTable = $('#ordersTable').DataTable({
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: getBaseUrl() + "/ws/rest/v1/radiologyorder/",
      cache: true,
      dataType: "json",
      headers: {
        Accept: "application/json; charset=utf-8",
        "Content-Type": "text/plain; charset=utf-8"
      },
      "data": function(data) {
        return {
          startIndex: data.start,
          limit: data.length,
          v: "full",
          totalCount: true,
        };
      },
      "dataFilter": function(data) {
        var json = $.parseJSON(data);
        json.recordsTotal = json.totalCount || 0;
        json.recordsFiltered = json.totalCount || 0;
        json.data = json.results;
        return JSON.stringify(json);
      },
      error: function (xhr, ajaxOptions, error) {
        console.log("Failed to retrive orders: "+ xhr.status + " " + error);
      }
    },
    "columns": [
      {
        "name": "accessionNumber",
        "responsivePriority": 1,
        "render": function(data, type, full, meta) {
          return full.accessionNumber;
        }
      },
      {
        "name": "patient",
        "render": function(data, type, full, meta) {
          return full.patient.display;
        }
      },
      {
        "name": "urgency",
        "render": function(data, type, full, meta) {
          switch (full.urgency) {
            case "ROUTINE":
              return "Routine";
            case "STAT":
              return "Emergency";
            case "ON_SCHEDULED_DATE":
              return "On scheduled date";
          }
        },
      },
      {
        "name": "concept",
        "render": function(data, type, full, meta) {
          return full.concept.display;
        }
      },
      {
        "name": "orderer",
        "responsivePriority": 11000,
        "render": function(data, type, full, meta) {
          return full.orderer.display;
        }
      },
      {
        "name": "scheduledDate",
        "render": function(data, type, full, meta) {
          var result = "";
          if (full.scheduledDate) {
            console.log("Still to be implemented");
          }
          return result;
        }
      },
      {
        "name": "dateActivated",
        "render": function(data, type, full, meta) {
          var result = "";
          if (full.dateActivated) {
            console.log("Still to be implemented");
          }
          return result;
        }
      },
      {
        "name": "dateStopped",
        "render": function(data, type, full, meta) {
          var result = "";
          if (full.dateStopped) {
            console.log("Still to be implemented");
          }
          return result;
        }
      }
    ]
  });
});

function getBaseUrl() {
    return window.location.origin + "/" + window.location.pathname.split('/')[1];
}
