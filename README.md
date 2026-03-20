# Smart Public Transport System v2.0
### Andhra Pradesh State Road Transport Corporation — Digital India Portal

---

## Features
- **Passenger Portal** — Search buses, live tracking, real-time seat availability
- **Conductor Portal** — Login, issue tickets, update occupancy, manage stops
- **Admin Panel** — Dashboard stats, conductor management, service assignments
- **Helpline** — Emergency contacts and APSRTC support numbers

## Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (single-file SPA)
- **Backend**: Node.js + Express.js
- **Database**: SQLite3

---

## Setup & Run

### Prerequisites
- Node.js v16 or higher installed

### Windows
```
Double-click run_project.bat
```

### Linux / Mac
```bash
chmod +x run_project.sh
./run_project.sh
```

### Manual
```bash
# Step 1: Install dependencies (first time only)
npm install

# Step 2: Initialize database
node database.js

# Step 3: Start server
node server.js

# Step 4: Open browser
# http://localhost:3000/PROJECT.html
```

---

## Demo Credentials

### Admin
| Username | Password |
|----------|----------|
| admin    | admin123 |
| manager  | manager123 |

### Conductor
| Employee ID | PIN  |
|-------------|------|
| EID1001     | 1234 |
| EID1002     | 1234 |
| EID1011     | 2345 |
| EID1012     | 2345 |

---

## Project Structure
```
smart_transport/
├── PROJECT.html      ← Main frontend (single-page app)
├── server.js         ← Express API server
├── database.js       ← Database schema + seed data
├── project.db        ← SQLite database (auto-created)
├── package.json      ← Node.js dependencies
├── run_project.bat   ← Windows launcher
├── run_project.sh    ← Linux/Mac launcher
└── README.md         ← This file
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/services | All services with stops + tickets |
| PATCH  | /api/services/:no/stop | Update current stop |
| PATCH  | /api/services/:no/occupancy | Update passenger counts |
| POST   | /api/tickets | Issue ticket |
| GET    | /api/tickets/service/:no | Get ticket log |
| POST   | /api/login/admin | Admin login |
| POST   | /api/login/conductor | Conductor login |
| GET    | /api/conductors | List conductors |
| POST   | /api/conductors | Add conductor |
| PUT    | /api/conductors/:id | Edit conductor |
| DELETE | /api/conductors/:id | Delete conductor (cascades) |
| GET    | /api/assignments | List assignments |
| POST   | /api/assignments | Create assignment |
| DELETE | /api/assignments/:id | Remove assignment |
| PATCH  | /api/assignments/:id/status | Accept/decline |
| GET    | /api/conductor/:id/services | Conductor's services |
| GET    | /api/admin/stats | Dashboard statistics |
