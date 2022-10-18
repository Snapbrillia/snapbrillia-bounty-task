const testData = [
  {
    day: 'Monday',
    startTime: '9:00am',
    endTime: '10:00am',
  },
  {
    day: 'Tuesday',
    startTime: '9:00am',
    endTime: '10:00am',
  },
  {
    day: 'Thursday',
    startTime: '9:00am',
    endTime: '10:00am',
  },
  {
    day: 'Sunday',
    startTime: '9:00am',
    endTime: '10:00am',
  },
];

export default function TeamSummaryOfficeHours() {
  return (
    <div className="container">
      <h5 className="text-muted">Office Hours</h5>
      <div className="d-inline-flex mt-2">
        {testData.map((available) => {
          return (
            <div className="d-flex flex-column me-5">
              <span className="text-muted">{available.day}</span>
              <div className="d-inline-flex primary">
                <span>{available.startTime}</span>
                <span className="ps-1 pe-1">-</span>
                <span>{available.endTime}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
