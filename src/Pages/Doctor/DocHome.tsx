

type Session = {
  id: number;
  name: string;
  date: string;
  time: string;
  reason?: string;
  age?: number;
  lastVisit?: string;
  testReport?: string;
};

export const DocHome = () => {
  // Data for today's session
  const todaysSession: Session = {
    id: 1,
    name: "Sufiya Kamal",
    date: "Mon 22 Dec 2024",
    time: "08:00-9:00",
    reason: "Cold",
    age: 50,
    lastVisit: "0xojaodfieisff",
    testReport: "0xojaodfieisff",
  };

  // Data for remaining sessions
  const remainingSessions: Session[] = [
    { id: 2, name: "Kobir", date: "Mon 22 Dec 2024", time: "10:00-11:00" },
    { id: 3, name: "Alice", date: "Tue 23 Dec 2024", time: "12:00-1:00" },
    { id: 4, name: "John", date: "Wed 24 Dec 2024", time: "2:00-3:00" },
  ];

  return (
    <div className="container text-center consoltBox">
      <div className="row">
        {/* Video Box */}
        <div className="col videoBox">{/* Video plugin will be added */}</div>

        {/* Today's Session */}
        <div className="col">
          <div className="col">
            <div className="sessionText">Today's Session</div>
            <div className="watingTitle">waiting room</div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="..."
                    className="img-fluid rounded-start"
                    alt={todaysSession.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{todaysSession.name}</h5>
                    <div className="slot">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>
                        {todaysSession.date}, {todaysSession.time}
                      </span>
                    </div>

                    <ul className="info">
                      <li>
                        <span>Reason: {todaysSession.reason}</span>
                      </li>
                      <li>Age: {todaysSession.age} Years Old</li>
                      <li>
                        <span>
                          Recent Doctor visit:{" "}
                          <a href="#">
                            <span>{todaysSession.lastVisit}</span>
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          Test Report:{" "}
                          <a href="#">
                            <span>{todaysSession.testReport}</span>
                          </a>
                        </span>
                      </li>
                    </ul>
                    <div className="icon">
                      <a href="#">
                        <i className="fa-regular fa-message"></i>
                      </a>
                      <a href="#">
                        <i className="fa-regular fa-phone-flip"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Sessions */}
      <div className="row mt-4">
        <div className="col remTitle">Remaining Sessions
        <div className="sessionList">
          {remainingSessions.map((session) => (
            <div className="remainList" key={session.id}>
              <i className="fa-regular fa-user pro"></i>
              <span className="Name">{session.name}</span>
              <div className="slot">
                <i className="fa-solid fa-calendar-days"></i>
                <span>
                  {session.date}, {session.time}
                </span>
                <a href="#"></a>
              </div>
            </div>
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default DocHome;