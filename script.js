console.log("connected");

// Fetch Data API Width ajax JQUERY
var settings = {
  url: " http://demo73.energeek.co.id/energeek-frontend-test/public/api/select_list/job?search",
  method: "GET",
  timeout: 0,
  headers: {
    Cookie:
      "XSRF-TOKEN=eyJpdiI6Ijk2L3MxV2ZzQ1phUVhZS05KbUhFSEE9PSIsInZhbHVlIjoicGtiYXlWczhLT2VTb3MxcUpLOTR3YlRuQzdxRVc5c05zd3FLajNFblYyL0ZzTGsrUVZjZFJIamJwVTJ0cGJIa0p5TEJvNmpoVmpTbjhoWnRhYmZhR2hHY3BwU2lId1BtKzZlVXRpNHo2WHg0U3BvaWdlL3VVTm0zeHNDcGtPcHUiLCJtYWMiOiI4NTJiZDJjYjFmMDNmNjQ4NGIyNTQ0NTI4M2JkZTYwYzBmZThlZWViY2NhY2ZhOGI2ZTg3Zjk1MDAxZTY4OTMxIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Ik12ODVoNGNmRkM1WUNGbXRGWlhtOUE9PSIsInZhbHVlIjoiTmhyajlrakFteGpFdmZIc0lXVnlDeGRkUU1NWlEwK09Ua3ROeGlhVXFPZm5VZTRZZ2QrNklMbkFHdEdRdG1DZndWWTJmRUMraU03M0c2OTBPSTgvL2NESWtxYzAvb2ZzS3VIMVZyck9HSlhyMkFwL3BlUzdMd1MxWVNlVzFES24iLCJtYWMiOiJkN2QwOThkNWI4NzViOGUwZDZmNDI1YzZmNWZhZDBjM2Y3Mjg0YmRmYjI3ODkyNDY2NzYzZmFiNGQ5ZWFjNmRlIiwidGFnIjoiIn0%3D",
  },
};

$.ajax(settings).done(function (response) {
  response.data.jobs.map((value) => {
    var options = $(`<option value="${value.id}">${value.name}</option>`);
    $("#listJob").append(options);
  });
});

// Fetch Data Skills From API

var dataSkiils = {
  url: " http://demo73.energeek.co.id/energeek-frontend-test/public/api/select_list/skill?search",
  method: "GET",
  timeout: 0,
  headers: {
    Cookie:
      "XSRF-TOKEN=eyJpdiI6Ijk2L3MxV2ZzQ1phUVhZS05KbUhFSEE9PSIsInZhbHVlIjoicGtiYXlWczhLT2VTb3MxcUpLOTR3YlRuQzdxRVc5c05zd3FLajNFblYyL0ZzTGsrUVZjZFJIamJwVTJ0cGJIa0p5TEJvNmpoVmpTbjhoWnRhYmZhR2hHY3BwU2lId1BtKzZlVXRpNHo2WHg0U3BvaWdlL3VVTm0zeHNDcGtPcHUiLCJtYWMiOiI4NTJiZDJjYjFmMDNmNjQ4NGIyNTQ0NTI4M2JkZTYwYzBmZThlZWViY2NhY2ZhOGI2ZTg3Zjk1MDAxZTY4OTMxIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Ik12ODVoNGNmRkM1WUNGbXRGWlhtOUE9PSIsInZhbHVlIjoiTmhyajlrakFteGpFdmZIc0lXVnlDeGRkUU1NWlEwK09Ua3ROeGlhVXFPZm5VZTRZZ2QrNklMbkFHdEdRdG1DZndWWTJmRUMraU03M0c2OTBPSTgvL2NESWtxYzAvb2ZzS3VIMVZyck9HSlhyMkFwL3BlUzdMd1MxWVNlVzFES24iLCJtYWMiOiJkN2QwOThkNWI4NzViOGUwZDZmNDI1YzZmNWZhZDBjM2Y3Mjg0YmRmYjI3ODkyNDY2NzYzZmFiNGQ5ZWFjNmRlIiwidGFnIjoiIn0%3D",
  },
};

$.ajax(dataSkiils).done(function (response) {
  response.data.skills.map((value) => {
    var options = $(`<option value=${value.id}>${value.name}</option>`);
    $("#listSkills").append(options);
  });
});
