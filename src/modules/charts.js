const options = {
  credits: {
    enabled: false,
  },
  legend:
   {
    symbolHeight: 10,
    symbolWidth: 10,
    symbolRadius: 10,
    verticalAlign: "bottom",
    itemDistance: 5,
    itemMarginTop: 5,
    itemHoverStyle: {
      color: "#000",
    },
    itemStyle: {
      color: "#999",
      fontSize: "10px",
      lineHeight: 20,
    },
  },
  tooltip: {
    pointFormat: "<b>{point.y}</b>",
  },
  chart: {
    plotShadow: false,
    backgroundColor: null,
    plotBorderWidth: 0,
    height: 250,
  },
  title: {
    text: "",
  },
};

export const chart = {
  pie(payload) {
    const _data = payload.map((i) => {
      return [i.status, i.count];
    });
   
    const checkvalue = payload.some((i) =>{
      return i.count !== 0;
    });
    // console.log(checkvalue)

    let _options = {
      ...options,

      chart: {
        ...options.chart,
        type: "pie",
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
          },
          borderWidth: 0,
          colors: ["#0099ff", "#33cc33", "#ffff00"],
          showInLegend: true,
        },
      },

       series: checkvalue ? [{ data :  _data}] : []
      
      
    };

    return _options;
  },
  bar(payload) {
    const _series = [
      {
        name: "Pending",
        color: "#0099ff",
        data: [],
      },
      {
        name: "Completed",
        color: "#33cc33",
        data: [],
      },
      {
        name: "Upcoming",
        color: "#ffff00",
        data: [],
      },
    ];
    const _dump = ["mon", "tue", "wed", "thu", "fri"];
    if (payload.length !== 0) {
      _dump.forEach((i) => {
        const _day = payload[0][i];
        _series[0].data.push(_day[0].count);
        _series[1].data.push(_day[1].count);
        _series[2].data.push(_day[2].count);
      });
    }

    let _options = {
      ...options,
      chart: {
        ...options.chart,
        type: "column",
      },
      tooltip: {
        pointFormat:
          '<span style="font-size:9px;">{series.name}</span>: <b>{point.y}</b><br/>',
      },
      plotOptions: {
        column: {
          stacking: "normal",
          borderWidth: 0,
          dataLabels: {
            enabled: true,
          },
        },
      },
      xAxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
      },

      series: _series 
      
      // [{
      //         name: 'Pending',
      //         color: '#09554F',
      //         data: [5, 3, 4, 7, 2]
      //     }, {
      //         name: 'Completed',
      //         color: '#25D0C1',
      //         data: [2, 2, 3, 2, 1]
      //     }, {
      //         name: 'Upcoming',
      //         color: '#1DA89C',
      //         data: [3, 4, 4, 2, 5]
      //     }]

      
    };

    return _options;
  },
};
