const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./project.db');

const ALL_SERVICES = [
  {no:"101",from:"Hyderabad", to:"Vijayawada", depot:"Miyapur", reg:"TS09Z1234", type:"Express", depTime:"07:00",
   stopDefs:[{name:"MGBS",m:0},{name:"LB Nagar",m:20},{name:"Hayathnagar",m:45},{name:"Choutuppal",m:90},{name:"Suryapet",m:180},{name:"Kodad",m:240},{name:"Nandigama",m:300},{name:"Kanchikacherla",m:330},{name:"Vijayawada",m:360}]},
  {no:"102",from:"Guntur", to:"Vizag", depot:"GNT-1", reg:"AP07V5678", type:"Super Luxury", depTime:"10:30",
   stopDefs:[{name:"Guntur NTR",m:0},{name:"Tenali",m:60},{name:"Vijayawada",m:120},{name:"Eluru",m:180},{name:"Tadepalligudem",m:240},{name:"Tanuku",m:270},{name:"Rajahmundry",m:330},{name:"Annavaram",m:420},{name:"Ananakapalle",m:510},{name:"Vizag",m:560}]},
  {no:"103",from:"Nellore", to:"Tirupati", depot:"NLR", reg:"AP26U1111", type:"Ordinary", depTime:"12:30",
   stopDefs:[{name:"Nellore BS",m:0},{name:"Vedayapalem",m:15},{name:"Gudur",m:60},{name:"Venkatagiri",m:120},{name:"Srikalahasti",m:180},{name:"Renigunta",m:225},{name:"Tirupati",m:240}]},
  {no:"104",from:"Anantapur", to:"Hyderabad", depot:"ATP", reg:"AP02B9999", type:"Express", depTime:"06:00",
   stopDefs:[{name:"Anantapur BS",m:0},{name:"Gooty",m:90},{name:"Dhone",m:150},{name:"Kurnool",m:210},{name:"Pebbair",m:270},{name:"Kothakota",m:300},{name:"Mahabubnagar",m:360},{name:"Jadcherla",m:390},{name:"Hyderabad",m:510}]},
  {no:"105",from:"Kakinada", to:"Vijayawada", depot:"KKD", reg:"AP05K4444", type:"Super Luxury", depTime:"11:45",
   stopDefs:[{name:"Kakinada Port",m:0},{name:"Samalkot",m:30},{name:"Rajahmundry",m:120},{name:"Ravulapalem",m:165},{name:"Tanuku",m:210},{name:"Tadepalligudem",m:250},{name:"Eluru",m:310},{name:"Hanuman Junction",m:360},{name:"Vijayawada",m:420}]},
  {no:"106",from:"Kadapa", to:"Nellore", depot:"KDP", reg:"AP04L1010", type:"Ordinary", depTime:"08:15",
   stopDefs:[{name:"Kadapa BS",m:0},{name:"Vontimitta",m:45},{name:"Rajampet",m:90},{name:"Kodur",m:135},{name:"Renigunta",m:210},{name:"Srikalahasti",m:240},{name:"Nellore",m:330}]},
  {no:"107",from:"Ongole", to:"Guntur", depot:"OGL", reg:"AP27M2222", type:"Express", depTime:"13:15",
   stopDefs:[{name:"Ongole BS",m:0},{name:"Singarayakonda",m:30},{name:"Addanki",m:90},{name:"Narasaraopet",m:180},{name:"Chilakaluripet",m:225},{name:"Guntur",m:270}]},
  {no:"108",from:"Warangal", to:"Nizamabad", depot:"WGL", reg:"TS11C3333", type:"Ordinary", depTime:"09:00",
   stopDefs:[{name:"Warangal BS",m:0},{name:"Hanamkonda",m:15},{name:"Kazipet",m:30},{name:"Ghanpur",m:90},{name:"Jangaon",m:150},{name:"Siddipet",m:240},{name:"Kamareddy",m:360},{name:"Nizamabad",m:450}]},
  {no:"109",from:"Khammam", to:"Hyderabad", depot:"KMM", reg:"TS04N7777", type:"Express", depTime:"12:15",
   stopDefs:[{name:"Khammam BS",m:0},{name:"Wyra",m:45},{name:"Tallada",m:90},{name:"Suryapet",m:165},{name:"Narkatpalli",m:240},{name:"Choutuppal",m:300},{name:"Hyderabad",m:390}]},
  {no:"110",from:"Chittoor", to:"Bangalore", depot:"CTR", reg:"AP03P8888", type:"Super Luxury", depTime:"10:00",
   stopDefs:[{name:"Chittoor BS",m:0},{name:"Palamaner",m:60},{name:"Mulbagal",m:120},{name:"Kolar",m:180},{name:"Hoskote",m:240},{name:"Bangalore KR Puram",m:300},{name:"Bangalore BS",m:330}]},
  {no:"111",from:"Tirupati", to:"Hyderabad", depot:"TPT", reg:"AP03YZ1234", type:"Express", depTime:"05:30",
   stopDefs:[{name:"Tirupati BS",m:0},{name:"Renigunta",m:20},{name:"Srikalahasti",m:60},{name:"Pileru",m:150},{name:"Kadapa",m:240},{name:"Nandyal",m:390},{name:"Kurnool",m:450},{name:"Hyderabad",m:630}]},
  {no:"112",from:"Vizag", to:"Srikakulam", depot:"VSP", reg:"AP31ST8888", type:"Ordinary", depTime:"07:45",
   stopDefs:[{name:"Vizag BS",m:0},{name:"Anakapalle",m:45},{name:"Sabbavaram",m:75},{name:"Pendurthi",m:105},{name:"Vizianagaram",m:180},{name:"Srikakulam",m:270}]},
  {no:"113",from:"Karimnagar", to:"Hyderabad", depot:"KRM", reg:"TS02D5555", type:"Express", depTime:"11:30",
   stopDefs:[{name:"Karimnagar BS",m:0},{name:"Sircilla",m:60},{name:"Kamareddy",m:150},{name:"Siddipet",m:210},{name:"Gajwel",m:270},{name:"Hyderabad",m:360}]},
  {no:"114",from:"Mahabubnagar", to:"Kurnool", depot:"MBNR", reg:"TS06K1122", type:"Ordinary", depTime:"12:45",
   stopDefs:[{name:"MBNR BS",m:0},{name:"Jadcherla",m:30},{name:"Nagarkurnool",m:90},{name:"Wanaparthy",m:150},{name:"Kurnool",m:210}]},
  {no:"115",from:"Proddatur", to:"Vijayawada", depot:"PDT", reg:"AP04F6677", type:"Super Luxury", depTime:"04:00",
   stopDefs:[{name:"Proddatur BS",m:0},{name:"Mydukur",m:30},{name:"Badvel",m:90},{name:"Markapur",m:210},{name:"Podili",m:270},{name:"Narasaraopet",m:360},{name:"Guntur",m:420},{name:"Vijayawada",m:450}]},
  {no:"116",from:"Eluru", to:"Rajahmundry", depot:"ELR", reg:"AP07J9900", type:"Express", depTime:"08:00",
   stopDefs:[{name:"Eluru BS",m:0},{name:"Hanuman Junction",m:45},{name:"Vijayawada",m:105},{name:"Guntur",m:165},{name:"Rajahmundry",m:405}]},
  {no:"117",from:"Madanapalle", to:"Tirupati", depot:"MPL", reg:"AP03X4433", type:"Ordinary", depTime:"12:00",
   stopDefs:[{name:"MPL BS",m:0},{name:"Pileru",m:90},{name:"Tirupati",m:180}]},
  {no:"118",from:"Ramagundam", to:"Hyderabad", depot:"RGD", reg:"TS01Y1122", type:"Express", depTime:"06:30",
   stopDefs:[{name:"Ramagundam",m:0},{name:"Godavarikhani",m:15},{name:"Sultanabad",m:45},{name:"Karimnagar",m:90},{name:"Siddipet",m:180},{name:"Hyderabad",m:300}]},
  {no:"119",from:"Suryapet", to:"Vijayawada", depot:"SRPT", reg:"TS04L8899", type:"Ordinary", depTime:"13:30",
   stopDefs:[{name:"Suryapet BS",m:0},{name:"Kodad",m:45},{name:"Jaggaiahpet",m:90},{name:"Nandigama",m:150},{name:"Vijayawada",m:210}]},
  {no:"120",from:"Adoni", to:"Kurnool", depot:"ADN", reg:"AP21C7766", type:"Express", depTime:"11:55",
   stopDefs:[{name:"Adoni",m:0},{name:"Yemmiganur",m:60},{name:"Kurnool",m:180}]},
];

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS service_assignments`);
  db.run(`DROP TABLE IF EXISTS tickets`);
  db.run(`DROP TABLE IF EXISTS stops`);
  db.run(`DROP TABLE IF EXISTS services`);
  db.run(`DROP TABLE IF EXISTS conductors`);
  db.run(`DROP TABLE IF EXISTS admins`);

  db.run(`CREATE TABLE services (
    no TEXT PRIMARY KEY,
    origin TEXT,
    destination TEXT,
    depot TEXT,
    reg TEXT,
    type TEXT,
    current_stop_index INTEGER DEFAULT 0,
    men_count INTEGER DEFAULT 0,
    women_count INTEGER DEFAULT 0,
    student_count INTEGER DEFAULT 0,
    departure_time TEXT
  )`);

  db.run(`CREATE TABLE stops (
    service_no TEXT,
    name TEXT,
    minutes_offset INTEGER,
    FOREIGN KEY(service_no) REFERENCES services(no)
  )`);

  db.run(`CREATE TABLE admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    name TEXT
  )`);

  db.run(`CREATE TABLE conductors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id TEXT UNIQUE,
    name TEXT,
    phone TEXT,
    depot TEXT,
    pin TEXT,
    status TEXT DEFAULT 'active'
  )`);

  db.run(`CREATE TABLE service_assignments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id TEXT,
    service_no TEXT,
    date TEXT,
    status TEXT DEFAULT 'pending',
    FOREIGN KEY(employee_id) REFERENCES conductors(employee_id),
    FOREIGN KEY(service_no) REFERENCES services(no)
  )`);

  const stmtSvc = db.prepare(`INSERT OR IGNORE INTO services (no, origin, destination, depot, reg, type, departure_time) VALUES (?,?,?,?,?,?,?)`);
  const stmtStop = db.prepare(`INSERT INTO stops (service_no, name, minutes_offset) VALUES (?,?,?)`);
  ALL_SERVICES.forEach(s => {
    stmtSvc.run(s.no, s.from, s.to, s.depot, s.reg, s.type, s.depTime);
    s.stopDefs.forEach(sd => stmtStop.run(s.no, sd.name, sd.m));
  });
  stmtSvc.finalize();
  stmtStop.finalize();

  db.run(`INSERT INTO admins (username, password, name) VALUES ('admin','admin123','Depot Manager')`);

  const conductors = [
    ['EID1001','Ravi Kumar','9876543210','Miyapur','1234'],
    ['EID1002','Suresh Babu','9876543211','GNT-1','1234'],
    ['EID1003','Anil Varma','9876543212','NLR','1234'],
    ['EID1004','Balu Yadav','9876543213','ATP','1234'],
  ];
  const stmtCond = db.prepare(`INSERT INTO conductors (employee_id, name, phone, depot, pin) VALUES (?,?,?,?,?)`);
  conductors.forEach(c => stmtCond.run(c));
  stmtCond.finalize();

  const assignments = [
    ['EID1001','101','2024-05-20','accepted'],
    ['EID1002','102','2024-05-20','accepted'],
    ['EID1003','103','2024-05-20','pending'],
  ];
  const stmtAsgn = db.prepare(`INSERT INTO service_assignments (employee_id, service_no, date, status) VALUES (?,?,?,?)`);
  assignments.forEach(a => stmtAsgn.run(a));
  stmtAsgn.finalize();

  db.run("SELECT 1", () => {
    console.log("Database initialized with routes and starting times.");
    db.close((err) => {
      if (err) console.error(err.message);
      process.exit(0);
    });
  });
});
