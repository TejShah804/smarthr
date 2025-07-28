import React from "react";
import ReactApexChart from "react-apexcharts";

const kpiCards = [
  {
    title: "Total Deals",
    value: "$45,221,45",
    change: "-4.01%",
    note: "from last week",
    icon: "bi-exclamation-diamond-fill",
    color: "orange",
    trend: "down",
  },
  {
    title: "Total Customers",
    value: "9895",
    change: "+55%",
    note: "from last week",
    icon: "bi-people-fill",
    color: "purple",
    trend: "up",
  },
  {
    title: "Deal Value",
    value: "$12,545,68",
    change: "+20.01%",
    note: "from last week",
    icon: "bi-gear-wide-connected",
    color: "teal",
    trend: "up",
  },
  {
    title: "Conversion Rate",
    value: "51.96%",
    change: "-6.01%",
    note: "from last week",
    icon: "bi-clipboard2-check-fill",
    color: "blue",
    trend: "down",
  },
  {
    title: "Revenue this month",
    value: "$46,548,48",
    change: "+55%",
    note: "from last week",
    icon: "bi-graph-up-arrow",
    color: "pink",
    trend: "up",
  },
  {
    title: "Active Customers",
    value: "8987",
    change: "-3.22%",
    note: "from last week",
    icon: "bi-star-fill",
    color: "yellow",
    trend: "down",
  },
];

const DealsOverview = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 300,
      dropShadow: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: '80%',
        isFunnel: true,
        colors: {
          ranges: [{
            from: 0,
            to: 10000,
            color: 'rgba(242, 101, 34, 0.85)'
          }]
        }
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Deals Funnel',
      align: 'middle',
    },
    xaxis: {
      categories: [
        'Initial Contact',
        'Qualified Lead',
        'Needs Analysis',
        'Proposal',
        'Negotiation',
        'Final Review',
        'Closed Won',
       
      ],
    },
    legend: {
      show: false,
    },
    fill: {
      colors: ['rgba(242, 101, 34, 0.85)']
    }
  };

  const chartSeries = [{
    name: "Deals Count",
    data: [1380, 1100, 990, 880, 740, 548, 330],
    color: 'rgba(242, 101, 34, 0.85)'
  }];

  return (
    <div className="deals-overview">
      <div className="cards" style={{flex:'1 1 200px', gap: '20px', marginBottom: '20px'}}>
        {kpiCards.map((card, i) => (
          <div className="card" key={i} style={{ 
            background: "linear-gradient(115.43deg, #FFFFFF 0.45%, #FFF3ED 100%)",
            padding: '15px',
            borderRadius: '8px',
            flex: '1 1 200px'
          }}>
            <div className={`icon ${card.color}`}>
              <i className={`bi ${card.icon}`}></i>
            </div>
            <h4>{card.title}</h4>
            <h3>{card.value}</h3>
            <div className={`change ${card.trend}`}>
              {card.trend === "up" ? "↑" : "↓"} {card.change}
              <span className="notes"> {card.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{display: 'flex', gap: '20px'}}>
        <div className="side-panels" style={{flex: 1}}>
          <div className="card" style={{padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
            <div className="card-header" style={{marginBottom:"10px", display: 'flex', justifyContent: 'space-between'}}>
              <h3>Deals Funnel</h3>
              <button className="date-btn" style={{padding: '5px 10px', border: '1px solid #ddd', borderRadius: '4px'}}>This Week</button>
            </div>
            <ReactApexChart 
              options={chartOptions} 
              series={chartSeries} 
              type="bar" 
              height={300} 
            />
            <div className="card" style={{border:'none'}}>
            <div className="card-header" style={{backgroundColor:"white", marginBottom: '15px'}}>
              <h3>Leads Values By Stages</h3>
            </div>
            <div className="leads-values">
              {[
                { label: "Marketing", value: "$5,221,45", level: 0 },
                { label: "Sales", value: "$30,424", level: 1 },
                { label: "Email", value: "$21,135", level: 2 },
                { label: "Chat", value: "$15,235", level: 3 },
                { label: "Operational", value: "$10,557", level: 4 }
              ].map((lead, idx) => (
                <div className="lead-item" key={idx} style={{ 
                  background: "white",
                  padding: '10px',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border:' 1px solid #ddd',
                }}>
                  <div className={`dot dot-level-${lead.level}`} style={{
                    width: '10px',
                    height: '10px',
                    background: `hsl(${200 - (lead.level * 30)}, 70%, 50%)`
                  }}></div>
                  <span style={{flex: 1}}>{lead.label}</span>
                  <span className="lead-value" style={{fontWeight: 'bold'}}>{lead.value}</span>
                </div>         
              ))}
            </div>
          </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default DealsOverview;