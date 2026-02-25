// Data Storage (In-Memory)
let currentUser = null;

let users = [
  { id: 1, username: "bhagyeshbhalerao", password: "admin123", fullName: "Bhagyesh Bhalerao", role: "admin", email: "bhagyesh@valumafia.com", phone: "98765-00000" },
  { id: 2, username: "Mahesh Raskar", password: "mahesh123", fullName: "Mahesh Raskar", role: "staff", email: "mahesh@valumafia.com", phone: "98765-11111" },
  { id: 3, username: "vinayak", password: "vinayak123", fullName: "Vinayak Kadate", role: "staff", email: "vinayak@valumafia.com", phone: "98765-22222" }
];

let vehicles = [
  { id: 1, vehicleNumber: "MH-29-AB-1234", contractorName: "Vikas Dhobi", sandCapacity: 15, ratePerUnit: 200, lastCheckPost: "Jalgaon City Police Check Post", timestamp: "2025-11-07 10:30", status: "Active" },
  { id: 2, vehicleNumber: "MH-29-CD-5678", contractorName: "Vikas Dhobi", sandCapacity: 12, ratePerUnit: 200, lastCheckPost: "Amalner Highway Check Post", timestamp: "2025-11-07 11:15", status: "Active" },
  { id: 3, vehicleNumber: "MH-29-EF-9012", contractorName: "Vikas Dhobi", sandCapacity: 18, ratePerUnit: 200, lastCheckPost: "Yawal Check Post", timestamp: "2025-11-07 09:45", status: "Active" },
  { id: 4, vehicleNumber: "MH-29-GH-3456", contractorName: "Rajesh Sharma", sandCapacity: 14, ratePerUnit: 200, lastCheckPost: "Chopda Highway Check Post", timestamp: "2025-11-07 08:20", status: "Active" },
  { id: 5, vehicleNumber: "MH-29-IJ-7890", contractorName: "Vikas Dhobi", sandCapacity: 16, ratePerUnit: 200, lastCheckPost: "Parola NH Route Check Post", timestamp: "2025-11-07 12:05", status: "Active" }
];

let contractors = [
  { id: 1, name: "Vikas Dhobi", contact: "98765-33333", totalVehicles: 5, totalTransports: 50, paymentStatus: "Paid", address: "Jalgaon, Maharashtra" },
  { id: 2, name: "Rajesh Sharma", contact: "98765-43210", totalVehicles: 2, totalTransports: 30, paymentStatus: "Paid", address: "Amalner, Maharashtra" }
];

let checkPosts = [
  { id: 1, name: "Jalgaon City Police Check Post", type: "Police", location: "Jalgaon City Center", address: "Near District Police Office, Jalgaon", latitude: 21.1458, longitude: 75.5625, vehiclesToday: 12, phone: "0257-2222333", active: true },
  { id: 2, name: "Amalner Highway Check Post", type: "Police", location: "Amalner Road", address: "NH48 near Amalner town", latitude: 21.2567, longitude: 75.4321, vehiclesToday: 8, phone: "0257-2345678", active: true },
  { id: 3, name: "Yawal Check Post", type: "Police", location: "Yawal Junction", address: "Highway junction near Yawal", latitude: 21.1234, longitude: 75.7890, vehiclesToday: 10, phone: "0257-2567890", active: true },
  { id: 4, name: "Muktainagar Industrial Check Post", type: "Police", location: "Muktainagar", address: "Near industrial area, Muktainagar", latitude: 21.0567, longitude: 75.5432, vehiclesToday: 6, phone: "0257-2890123", active: true },
  { id: 5, name: "Bodwad Main Road Check Post", type: "Police", location: "Bodwad", address: "Main road near Bodwad", latitude: 21.3421, longitude: 75.4567, vehiclesToday: 7, phone: "0257-2234567", active: true },
  { id: 6, name: "Chopda Highway Check Post", type: "Police", location: "Chopda", address: "NH highway junction at Chopda", latitude: 21.4567, longitude: 75.3210, vehiclesToday: 9, phone: "0257-2567123", active: true },
  { id: 7, name: "Parola NH Route Check Post", type: "Police", location: "Parola", address: "National Highway Route, Parola", latitude: 21.0987, longitude: 75.6543, vehiclesToday: 11, phone: "0257-2345900", active: true },
  { id: 8, name: "Erandol Strategic Check Post", type: "Police", location: "Erandol", address: "Strategic location near Erandol", latitude: 21.2890, longitude: 75.7654, vehiclesToday: 5, phone: "0257-2789456", active: true },
  { id: 9, name: "Jalgaon Weight Bridge", type: "Weight Bridge", location: "Jalgaon City", address: "Commercial area weight bridge", latitude: 21.1520, longitude: 75.5710, vehiclesToday: 15, phone: "0257-2111222", active: true },
  { id: 10, name: "Amalner Toll Booth", type: "Toll", location: "Amalner", address: "Highway toll collection point", latitude: 21.2600, longitude: 75.4200, vehiclesToday: 8, phone: "0257-2333444", active: true }
];

let dailyRecords = [
  { id: 1, vehicleNumber: "MH-29-AB-1234", contractorName: "Vikas Dhobi", checkPost: "Jalgaon City Police Check Post", sandQuantity: 15, ratePerUnit: 200, totalPrice: 3000, timestamp: "2025-11-07 10:30", recordedBy: "Sarthak Deore" },
  { id: 2, vehicleNumber: "MH-29-CD-5678", contractorName: "Vikas Dhobi", checkPost: "Amalner Highway Check Post", sandQuantity: 12, ratePerUnit: 200, totalPrice: 2400, timestamp: "2025-11-07 11:15", recordedBy: "Vinayak Kadate" },
  { id: 3, vehicleNumber: "MH-29-EF-9012", contractorName: "Vikas Dhobi", checkPost: "Yawal Check Post", sandQuantity: 18, ratePerUnit: 200, totalPrice: 3600, timestamp: "2025-11-07 09:45", recordedBy: "Sarthak Deore" },
  { id: 4, vehicleNumber: "MH-29-GH-3456", contractorName: "Rajesh Sharma", checkPost: "Chopda Highway Check Post", sandQuantity: 14, ratePerUnit: 200, totalPrice: 2800, timestamp: "2025-11-07 08:20", recordedBy: "Vinayak Kadate" },
  { id: 5, vehicleNumber: "MH-29-IJ-7890", contractorName: "Vikas Dhobi", checkPost: "Parola NH Route Check Post", sandQuantity: 16, ratePerUnit: 200, totalPrice: 3200, timestamp: "2025-11-07 12:05", recordedBy: "Sarthak Deore" }
];

let map;
let markers = [];

// Login Handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('loginError');
  
  // Clear previous error
  errorDiv.style.display = 'none';
  errorDiv.textContent = '';
  
  // Validate credentials
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    currentUser = user;
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboardPage').classList.add('active');
    initializeDashboard();
  } else {
    // Show error message
    errorDiv.textContent = '⚠ Invalid username or password. Please try again.';
    errorDiv.style.display = 'block';
    // Clear password field
    document.getElementById('password').value = '';
  }
});

// Logout
function logout() {
  currentUser = null;
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('dashboardPage').classList.remove('active');
  // Clear login form
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  // Clear any error messages
  const errorDiv = document.getElementById('loginError');
  if (errorDiv) {
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';
  }
}

// Initialize Dashboard
function initializeDashboard() {
  updateUserProfile();
  updateNavigationAccess();
  initMap();
  updateDashboardStats();
  renderVehiclesTable();
  renderContractorsTable();
  renderCheckPostsTable();
  updateReportsSection();
  updateSettings();
  populateCheckPostSelect();
  
  // Auto-calculate total price
  document.getElementById('sandQuantity').addEventListener('input', calculateTotalPrice);
  document.getElementById('ratePerUnit').addEventListener('input', calculateTotalPrice);
  
  // Search functionality
  document.getElementById('vehicleSearch').addEventListener('input', function(e) {
    renderVehiclesTable(e.target.value);
  });
  
  document.getElementById('contractorSearch').addEventListener('input', function(e) {
    renderContractorsTable(e.target.value);
  });
}

// Update User Profile Display
function updateUserProfile() {
  if (!currentUser) return;
  
  const userAvatar = document.querySelector('.user-avatar');
  const userName = document.querySelector('.user-profile span');
  
  userAvatar.textContent = currentUser.fullName.charAt(0).toUpperCase();
  
  // Create user info HTML with role badge
  const roleColor = currentUser.role === 'admin' ? '#ff6b00' : '#00d4ff';
  userName.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: flex-start;">
      <span style="color: #e0e0e0; font-size: 14px; font-weight: 500;">${currentUser.fullName}</span>
      <span style="color: ${roleColor}; font-size: 11px; font-weight: 600; text-transform: uppercase;">${currentUser.role}</span>
    </div>
  `;
  
  // Update avatar style based on role
  if (currentUser.role === 'admin') {
    userAvatar.style.background = 'linear-gradient(135deg, #ff6b00, #ff9500)';
  } else {
    userAvatar.style.background = 'linear-gradient(135deg, #00d4ff, #39ff14)';
  }
}

// Update Navigation Access Based on Role
function updateNavigationAccess() {
  if (!currentUser) return;
  
  const settingsNav = document.querySelector('.nav-item[data-section="settings"]');
  
  if (currentUser.role === 'staff') {
    // Hide Settings for staff
    settingsNav.style.display = 'none';
  } else {
    settingsNav.style.display = 'flex';
  }
}

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
    const section = this.getAttribute('data-section');
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
    
    // Update active section
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(section + '-section').classList.add('active');
    
    // Update page title
    const titles = {
      dashboard: 'Dashboard',
      vehicles: 'Vehicles',
      contractors: 'Contractors',
      checkposts: 'Check Posts',
      reports: 'Reports',
      settings: 'Settings'
    };
    document.getElementById('pageTitle').textContent = titles[section];
    
    // Refresh map if dashboard
    if (section === 'dashboard' && map) {
      setTimeout(() => map.invalidateSize(), 100);
    }
  });
});

// Initialize Map
function initMap() {
  // Center map on Jalgaon district
  map = L.map('map').setView([21.1458, 75.5625], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add markers for check posts with color by type
  checkPosts.forEach(post => {
    let markerIcon = L.icon({
      iconUrl: post.type === 'Police' ? 'https://cdn.jsdelivr.net/gh/Leaflet/Leaflet@main/dist/images/marker-icon-2x.png' : (post.type === 'Weight Bridge' ? 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-violet.png' : 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-orange.png'),
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [2, -32],
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    });
    const marker = L.marker([post.latitude, post.longitude], {icon: markerIcon}).addTo(map);
    marker.bindPopup(`
      <div style="color: #000; font-family: sans-serif;">
        <strong style="font-size: 15px; color: #111;">${post.name}</strong><br>
        <span style="font-size: 13px; color: #444;">${post.location} <br/> ${post.address}</span><br>
        <span style="font-size: 12px;">Type: <b>${post.type}</b></span><br>
        <span style="font-size: 12px; color: #00d4ff; font-weight: 600;">Vehicles Today: ${post.vehiclesToday}</span><br>
        <span style="font-size: 12px; color: #222;">Phone: ${post.phone || '-'}<br>Active: <b>${post.active ? 'Yes' : 'No'}</b></span><br>
        <button onclick="showCheckPostVehicles(${post.id})" style="margin-top: 8px; padding: 6px 12px; background: #00d4ff; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">View Vehicles</button>
      </div>
    `);
    markers.push(marker);
  });
}

// Show all check posts legend/intel panel
function showCheckPostLegend() {
  const legendModal = document.createElement('div');
  legendModal.className = 'modal active';

  let html = `<h3 style=\"margin-bottom: 18px; color: #fff;\"><i class=\"fas fa-list\"></i> All Check Posts (Jalgaon)</h3><div style=\"max-height: 60vh; overflow-y: auto;\">`;
  checkPosts.forEach(post => {
    html += `<div style=\"padding: 12px; background: rgba(0, 212, 255, 0.04); border-radius: 8px; border: 1px solid rgba(0, 212, 255, 0.10); margin-bottom: 7px;\">
      <strong style=\"color: #00d4ff; font-size: 14px;\">${post.name}</strong>
      <span style=\"font-size: 11px; color: #888; margin-left: 10px;\">${post.type}</span><br>
      <span style=\"font-size: 12px; color: #444;\">${post.location} | <span style=\"color:#b0b0b0;\">${post.address || ''}</span></span><br>
      <span style=\"font-size: 12px; color: #222;\">Phone: ${post.phone || '-'}</span><br>
      <span style=\"font-size: 11px; color: #888;\">Lat:${post.latitude.toFixed(4)}, Lng:${post.longitude.toFixed(4)}</span>
      <span style=\"font-size: 11px; color: ${post.active ? '#39ff14' : '#ff6b00'}; margin-left:8px;\">${post.active ? 'Active' : 'Inactive'}</span><br>
      <span style=\"font-size: 11px; color:#00d4ff;\">Vehicles Today: <b>${post.vehiclesToday}</b></span> <button onclick=\"viewCheckPostDetails(${post.id})\" style=\"margin-left:14px; padding: 4px 10px; background: #008ab8; color: #fff; border:none; border-radius:4px; font-size:11px; cursor:pointer;\">Intel</button>
    </div>`;
  });
  html += `</div>`;
  legendModal.innerHTML = `<div class=\"modal-content\">
    <div class=\"modal-header\">
      <h3>Check Post List</h3>
      <div class=\"close-modal\" onclick=\"this.closest('.modal').remove()\">
        <i class=\"fas fa-times\"></i>
      </div>
    </div>
    <div class=\"modal-body\">${html}
    <div style=\"margin-top:10px; color:#888; font-size:13px;\">Use search/filter: <input type=\"text\" style=\"padding:6px; border-radius:4px; border:1px solid #00d4ff; margin-left: 6px;\" oninput=\"filterLegend(this.value)\"> (by name/location/type)</div>
    </div>
  </div>`;
  document.body.appendChild(legendModal);
}

// Legend filter handler (global)
window.filterLegend = function(term) {
  const modal = document.querySelector('.modal.active .modal-body');
  if (!modal) return;
  let html = `<h3 style=\"margin-bottom: 18px; color: #fff;\"><i class=\"fas fa-list\"></i> All Check Posts (Jalgaon)</h3><div style=\"max-height: 60vh; overflow-y: auto;\">`;
  checkPosts.filter(post => {
    term = term.toLowerCase();
    return post.name.toLowerCase().includes(term) || post.location.toLowerCase().includes(term) || post.type.toLowerCase().includes(term);
  }).forEach(post => {
    html += `<div style=\"padding: 12px; background: rgba(0, 212, 255, 0.04); border-radius: 8px; border: 1px solid rgba(0, 212, 255, 0.10); margin-bottom: 7px;\">
      <strong style=\"color: #00d4ff; font-size: 14px;\">${post.name}</strong>
      <span style=\"font-size: 11px; color: #888; margin-left: 10px;\">${post.type}</span><br>
      <span style=\"font-size: 12px; color: #444;\">${post.location} | <span style=\"color:#b0b0b0;\">${post.address || ''}</span></span><br>
      <span style=\"font-size: 12px; color: #222;\">Phone: ${post.phone || '-'}</span><br>
      <span style=\"font-size: 11px; color: #888;\">Lat:${post.latitude.toFixed(4)}, Lng:${post.longitude.toFixed(4)}</span>
      <span style=\"font-size: 11px; color: ${post.active ? '#39ff14' : '#ff6b00'}; margin-left:8px;\">${post.active ? 'Active' : 'Inactive'}</span><br>
      <span style=\"font-size: 11px; color:#00d4ff;\">Vehicles Today: <b>${post.vehiclesToday}</b></span> <button onclick=\"viewCheckPostDetails(${post.id})\" style=\"margin-left:14px; padding: 4px 10px; background: #008ab8; color: #fff; border:none; border-radius:4px; font-size:11px; cursor:pointer;\">Intel</button>
    </div>`;
  });
  html += `</div>`;
  modal.innerHTML = html + `<div style=\"margin-top:10px; color:#888; font-size:13px;\">Use search/filter: <input type=\"text\" style=\"padding:6px; border-radius:4px; border:1px solid #00d4ff; margin-left: 6px;\" oninput=\"filterLegend(this.value)\"> (by name/location/type)</div>`;
};

// Show vehicles at check post
function showCheckPostVehicles(postId) {
  const post = checkPosts.find(p => p.id === postId);
  const postVehicles = dailyRecords.filter(r => r.checkPost === post.name);
  
  let html = `<h3 style="margin-bottom: 15px;">${post.name} - Vehicles Today</h3>`;
  
  if (postVehicles.length === 0) {
    html += '<p>No vehicles recorded today at this check post.</p>';
  } else {
    html += '<div style="max-height: 300px; overflow-y: auto;">';
    postVehicles.forEach(v => {
      html += `
        <div style="padding: 12px; background: rgba(0, 212, 255, 0.05); border-radius: 8px; margin-bottom: 10px; border: 1px solid rgba(0, 212, 255, 0.2);">
          <strong style="color: #00d4ff;">${v.vehicleNumber}</strong><br>
          <span style="font-size: 13px; color: #b0b0b0;">Contractor: ${v.contractorName}</span><br>
          <span style="font-size: 13px; color: #b0b0b0;">Sand: ${v.sandQuantity} units</span><br>
          <span style="font-size: 13px; color: #39ff14; font-weight: 600;">₹${v.totalPrice}</span>
          <span style="font-size: 11px; color: #888; float: right;">${v.timestamp}</span>
        </div>
      `;
    });
    html += '</div>';
  }
  
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Check Post Details</h3>
        <div class="close-modal" onclick="this.closest('.modal').remove()">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="modal-body">
        ${html}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

// Update Dashboard Stats
function updateDashboardStats() {
  const totalVehicles = dailyRecords.length;
  const totalSand = dailyRecords.reduce((sum, r) => sum + r.sandQuantity, 0);
  const totalRevenue = dailyRecords.reduce((sum, r) => sum + r.totalPrice, 0);
  
  document.getElementById('totalVehiclesToday').textContent = totalVehicles;
  document.getElementById('totalSand').textContent = totalSand;
  document.getElementById('totalRevenue').textContent = '₹' + totalRevenue.toLocaleString();
}

// Render Vehicles Table
function renderVehiclesTable(searchTerm = '') {
  const tbody = document.getElementById('vehiclesTableBody');
  let filteredVehicles = vehicles;
  
  if (searchTerm) {
    filteredVehicles = vehicles.filter(v => 
      v.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.contractorName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  tbody.innerHTML = filteredVehicles.map(v => `
    <tr>
      <td><strong>${v.vehicleNumber}</strong></td>
      <td>${v.contractorName}</td>
      <td>${v.sandCapacity} units</td>
      <td>₹${v.ratePerUnit}</td>
      <td>${v.lastCheckPost}</td>
      <td>${v.timestamp}</td>
      <td><span class="badge badge-success">${v.status}</span></td>
      <td>
        <div class="action-buttons">
          <button class="btn-icon" onclick="editVehicle(${v.id})" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-icon delete" onclick="deleteVehicle(${v.id})" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Render Contractors Table
function renderContractorsTable(searchTerm = '') {
  const tbody = document.getElementById('contractorsTableBody');
  let filteredContractors = contractors;
  
  if (searchTerm) {
    filteredContractors = contractors.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.contact.includes(searchTerm)
    );
  }
  
  tbody.innerHTML = filteredContractors.map(c => `
    <tr>
      <td><strong>${c.name}</strong></td>
      <td>${c.contact}</td>
      <td>${c.totalVehicles}</td>
      <td>${c.totalTransports}</td>
      <td><span class="badge ${c.paymentStatus === 'Paid' ? 'badge-success' : 'badge-warning'}">${c.paymentStatus}</span></td>
      <td>
        <div class="action-buttons">
          <button class="btn-icon" onclick="editContractor(${c.id})" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-icon delete" onclick="deleteContractor(${c.id})" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Render Check Posts Table
function renderCheckPostsTable() {
  const tbody = document.getElementById('checkPostsTableBody');
  
  tbody.innerHTML = checkPosts.map(cp => {
    const typeBadge = cp.type === 'Police' ? 'badge-warning' : (cp.type === 'Weight Bridge' ? 'badge-info' : 'badge-success');
    const statusBadge = cp.active ? 'badge-success' : 'badge-warning';
    return `
    <tr>
      <td>
        <strong>${cp.name}</strong><br>
        <span class="badge ${typeBadge}" style="font-size: 10px; margin-top: 4px;">${cp.type}</span>
      </td>
      <td>
        ${cp.location}<br>
        <span style="font-size: 11px; color: #888;">${cp.address || ''}</span>
      </td>
      <td>${cp.latitude.toFixed(4)}, ${cp.longitude.toFixed(4)}</td>
      <td><span class="badge badge-info">${cp.vehiclesToday}</span></td>
      <td><span class="badge ${statusBadge}">${cp.active ? 'Active' : 'Inactive'}</span></td>
      <td>
        <div class="action-buttons">
          <button class="btn-icon" onclick="viewCheckPostDetails(${cp.id})" title="View Details">
            <i class="fas fa-eye"></i>
          </button>
          <button class="btn-icon" onclick="editCheckPost(${cp.id})" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-icon delete" onclick="deleteCheckPost(${cp.id})" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `}).join('');
}

// Update Reports Section
function updateReportsSection() {
  const todayVehicles = dailyRecords.length;
  const weekVehicles = todayVehicles * 5; // Simulated
  const monthVehicles = todayVehicles * 22; // Simulated
  const totalRevenue = dailyRecords.reduce((sum, r) => sum + r.totalPrice, 0);
  
  document.getElementById('reportTodayVehicles').textContent = todayVehicles;
  document.getElementById('reportWeekVehicles').textContent = weekVehicles;
  document.getElementById('reportMonthVehicles').textContent = monthVehicles;
  document.getElementById('reportTotalRevenue').textContent = '₹' + totalRevenue.toLocaleString();
  
  // Create charts
  createContractorPieChart();
  createRevenuePieChart();
  createTrendLineChart();
}

// Create Contractor Pie Chart
function createContractorPieChart() {
  const ctx = document.getElementById('contractorPieChart').getContext('2d');
  
  const contractorCounts = {};
  dailyRecords.forEach(r => {
    contractorCounts[r.contractorName] = (contractorCounts[r.contractorName] || 0) + 1;
  });
  
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(contractorCounts),
      datasets: [{
        data: Object.values(contractorCounts),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderColor: '#141832',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#b0b0b0',
            font: { size: 12 }
          }
        }
      }
    }
  });
}

// Create Revenue Pie Chart
function createRevenuePieChart() {
  const ctx = document.getElementById('revenuePieChart').getContext('2d');
  
  const contractorRevenue = {};
  dailyRecords.forEach(r => {
    contractorRevenue[r.contractorName] = (contractorRevenue[r.contractorName] || 0) + r.totalPrice;
  });
  
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(contractorRevenue),
      datasets: [{
        data: Object.values(contractorRevenue),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderColor: '#141832',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#b0b0b0',
            font: { size: 12 }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ': ₹' + context.parsed.toLocaleString();
            }
          }
        }
      }
    }
  });
}

// Create Trend Line Chart
function createTrendLineChart() {
  const ctx = document.getElementById('trendLineChart').getContext('2d');
  
  // Simulate 7 days of data
  const days = ['Nov 1', 'Nov 2', 'Nov 3', 'Nov 4', 'Nov 5', 'Nov 6', 'Nov 7'];
  const counts = [3, 4, 2, 5, 4, 3, dailyRecords.length];
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
        label: 'Vehicles',
        data: counts,
        borderColor: '#00d4ff',
        backgroundColor: 'rgba(0, 212, 255, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#00d4ff',
        pointBorderColor: '#141832',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#b0b0b0',
            font: { size: 11 }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.05)'
          }
        },
        x: {
          ticks: {
            color: '#b0b0b0',
            font: { size: 11 }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.05)'
          }
        }
      }
    }
  });
}

// Update Settings
function updateSettings() {
  document.getElementById('totalCheckPostsSetting').textContent = checkPosts.length;
  document.getElementById('totalContractorsSetting').textContent = contractors.length;
  document.getElementById('totalVehiclesSetting').textContent = vehicles.length;
  
  // Render User Management if admin
  if (currentUser && currentUser.role === 'admin') {
    renderUserManagement();
  }
}

// Render User Management Section
function renderUserManagement() {
  const userManagementSection = document.getElementById('userManagementSection');
  if (!userManagementSection) return;
  
  const adminUsers = users.filter(u => u.role === 'admin');
  const staffUsers = users.filter(u => u.role === 'staff');
  
  let html = '<h3 style="margin-bottom: 20px;">User Management</h3>';
  
  // Admin Section
  html += '<div style="margin-bottom: 30px;">';
  html += '<h4 style="color: #ff6b00; font-size: 14px; margin-bottom: 15px; text-transform: uppercase;">Administrator</h4>';
  adminUsers.forEach(user => {
    html += `
      <div style="padding: 15px; background: rgba(255, 107, 0, 0.05); border-radius: 8px; margin-bottom: 10px; border: 1px solid rgba(255, 107, 0, 0.2);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <strong style="color: #fff; font-size: 14px;">${user.fullName}</strong>
            <div style="font-size: 12px; color: #b0b0b0; margin-top: 4px;">Username: ${user.username}</div>
            <div style="font-size: 12px; color: #b0b0b0;">Email: ${user.email}</div>
            <div style="font-size: 12px; color: #b0b0b0;">Phone: ${user.phone}</div>
          </div>
          <span class="badge" style="background: rgba(255, 107, 0, 0.15); color: #ff6b00; border: 1px solid rgba(255, 107, 0, 0.3);">Admin</span>
        </div>
      </div>
    `;
  });
  html += '</div>';
  
  // Staff Section
  html += '<div style="margin-bottom: 30px;">';
  html += '<h4 style="color: #00d4ff; font-size: 14px; margin-bottom: 15px; text-transform: uppercase;">Staff Members</h4>';
  staffUsers.forEach(user => {
    html += `
      <div style="padding: 15px; background: rgba(0, 212, 255, 0.05); border-radius: 8px; margin-bottom: 10px; border: 1px solid rgba(0, 212, 255, 0.2);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <strong style="color: #fff; font-size: 14px;">${user.fullName}</strong>
            <div style="font-size: 12px; color: #b0b0b0; margin-top: 4px;">Username: ${user.username}</div>
            <div style="font-size: 12px; color: #b0b0b0;">Email: ${user.email}</div>
            <div style="font-size: 12px; color: #b0b0b0;">Phone: ${user.phone}</div>
          </div>
          <span class="badge badge-info">Staff</span>
        </div>
      </div>
    `;
  });
  html += '</div>';
  
  html += '<button class="btn-primary" onclick="alert(\'Add new staff member feature coming soon!\')"><i class="fas fa-user-plus"></i> Add Staff Member</button>';
  
  userManagementSection.innerHTML = html;
}

// Modal Functions
function openAddVehicleModal() {
  document.getElementById('addVehicleModal').classList.add('active');
  document.getElementById('addVehicleForm').reset();
  document.getElementById('ratePerUnit').value = 200;
}

function openAddContractorModal() {
  document.getElementById('addContractorModal').classList.add('active');
  document.getElementById('addContractorForm').reset();
}

function openAddCheckPostModal() {
  document.getElementById('addCheckPostModal').classList.add('active');
  document.getElementById('addCheckPostForm').reset();
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Populate Check Post Select
function populateCheckPostSelect() {
  const select = document.getElementById('checkPostSelect');
  select.innerHTML = '<option value="">Select check post</option>' + 
    checkPosts.map(cp => `<option value="${cp.name}">${cp.name}</option>`).join('');
}

// Calculate Total Price
function calculateTotalPrice() {
  const quantity = parseFloat(document.getElementById('sandQuantity').value) || 0;
  const rate = parseFloat(document.getElementById('ratePerUnit').value) || 0;
  const total = quantity * rate;
  document.getElementById('totalPrice').value = '₹' + total.toLocaleString();
}

// Submit Vehicle
function submitVehicle() {
  const vehicleNumber = document.getElementById('vehicleNumber').value;
  const contractorName = document.getElementById('contractorName').value;
  const sandQuantity = parseFloat(document.getElementById('sandQuantity').value);
  const ratePerUnit = parseFloat(document.getElementById('ratePerUnit').value);
  const checkPost = document.getElementById('checkPostSelect').value;
  
  if (!vehicleNumber || !contractorName || !sandQuantity || !ratePerUnit || !checkPost) {
    alert('Please fill all fields');
    return;
  }
  
  const totalPrice = sandQuantity * ratePerUnit;
  const now = new Date();
  const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  // Add to daily records
  const newRecord = {
    id: dailyRecords.length + 1,
    vehicleNumber,
    contractorName,
    checkPost,
    sandQuantity,
    ratePerUnit,
    totalPrice,
    timestamp,
    recordedBy: currentUser ? currentUser.fullName : 'Unknown'
  };
  dailyRecords.push(newRecord);
  
  // Update or add vehicle
  const existingVehicle = vehicles.find(v => v.vehicleNumber === vehicleNumber);
  if (existingVehicle) {
    existingVehicle.lastCheckPost = checkPost;
    existingVehicle.timestamp = timestamp;
    existingVehicle.sandCapacity = sandQuantity;
  } else {
    vehicles.push({
      id: vehicles.length + 1,
      vehicleNumber,
      contractorName,
      sandCapacity: sandQuantity,
      ratePerUnit,
      lastCheckPost: checkPost,
      timestamp,
      status: 'Active'
    });
  }
  
  // Update check post count
  const checkPostObj = checkPosts.find(cp => cp.name === checkPost);
  if (checkPostObj) {
    checkPostObj.vehiclesToday++;
  }
  
  // Update contractor
  let contractor = contractors.find(c => c.name === contractorName);
  if (contractor) {
    contractor.totalTransports++;
  } else {
    contractors.push({
      id: contractors.length + 1,
      name: contractorName,
      contact: 'N/A',
      totalVehicles: 1,
      totalTransports: 1,
      paymentStatus: 'Pending'
    });
  }
  
  // Refresh all data
  updateDashboardStats();
  renderVehiclesTable();
  renderContractorsTable();
  renderCheckPostsTable();
  updateSettings();
  
  // Refresh map markers
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  checkPosts.forEach(post => {
    const marker = L.marker([post.latitude, post.longitude]).addTo(map);
    marker.bindPopup(`
      <div style="color: #000; font-family: sans-serif;">
        <strong style="font-size: 14px;">${post.name}</strong><br>
        <span style="font-size: 12px; color: #666;">${post.location}</span><br>
        <span style="font-size: 12px; color: #00d4ff; font-weight: 600;">Vehicles Today: ${post.vehiclesToday}</span><br>
        <button onclick="showCheckPostVehicles(${post.id})" style="margin-top: 8px; padding: 6px 12px; background: #00d4ff; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">View Vehicles</button>
      </div>
    `);
    markers.push(marker);
  });
  
  closeModal('addVehicleModal');
  alert('Vehicle entry added successfully!');
}

// Submit Contractor
function submitContractor() {
  const name = document.getElementById('newContractorName').value;
  const contact = document.getElementById('contractorContact').value;
  
  if (!name || !contact) {
    alert('Please fill all fields');
    return;
  }
  
  contractors.push({
    id: contractors.length + 1,
    name,
    contact,
    totalVehicles: 0,
    totalTransports: 0,
    paymentStatus: 'Pending'
  });
  
  renderContractorsTable();
  updateSettings();
  closeModal('addContractorModal');
  alert('Contractor added successfully!');
}

// Submit Check Post
function submitCheckPost() {
  const name = document.getElementById('checkPostName').value;
  const type = document.getElementById('checkPostType').value;
  const location = document.getElementById('checkPostLocation').value;
  const address = document.getElementById('checkPostAddress').value;
  const latitude = parseFloat(document.getElementById('checkPostLat').value);
  const longitude = parseFloat(document.getElementById('checkPostLng').value);
  const phone = document.getElementById('checkPostPhone').value;
  const active = document.getElementById('checkPostActive').value === 'true';
  
  if (!name || !type || !location || !latitude || !longitude) {
    alert('Please fill all required fields');
    return;
  }
  
  const newCheckPost = {
    id: checkPosts.length + 1,
    name,
    type,
    location,
    address,
    latitude,
    longitude,
    vehiclesToday: 0,
    phone,
    active
  };
  
  checkPosts.push(newCheckPost);
  
  // Add marker to map
  let markerIcon = L.icon({
    iconUrl: type === 'Police' ? 'https://cdn.jsdelivr.net/gh/Leaflet/Leaflet@main/dist/images/marker-icon-2x.png' : (type === 'Weight Bridge' ? 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-violet.png' : 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-orange.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [2, -32],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  });
  const marker = L.marker([latitude, longitude], {icon: markerIcon}).addTo(map);
  marker.bindPopup(`
    <div style="color: #000; font-family: sans-serif;">
      <strong style="font-size: 15px; color: #111;">${name}</strong><br>
      <span style="font-size: 13px; color: #444;">${location} <br/> ${address}</span><br>
      <span style="font-size: 12px;">Type: <b>${type}</b></span><br>
      <span style="font-size: 12px; color: #00d4ff; font-weight: 600;">Vehicles Today: 0</span><br>
      <span style="font-size: 12px; color: #222;">Phone: ${phone || '-'}<br>Active: <b>${active ? 'Yes' : 'No'}</b></span><br>
      <button onclick="showCheckPostVehicles(${newCheckPost.id})" style="margin-top: 8px; padding: 6px 12px; background: #00d4ff; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">View Vehicles</button>
    </div>
  `);
  markers.push(marker);
  
  renderCheckPostsTable();
  updateSettings();
  populateCheckPostSelect();
  closeModal('addCheckPostModal');
  alert('Check post added successfully!');
}

// Edit Functions
function editVehicle(id) {
  alert('Edit vehicle feature - ID: ' + id);
}

function editContractor(id) {
  alert('Edit contractor feature - ID: ' + id);
}

function editCheckPost(id) {
  alert('Edit check post feature - ID: ' + id);
}

// Delete Functions
function deleteVehicle(id) {
  if (confirm('Are you sure you want to delete this vehicle?')) {
    vehicles = vehicles.filter(v => v.id !== id);
    renderVehiclesTable();
    updateSettings();
    alert('Vehicle deleted successfully!');
  }
}

function deleteContractor(id) {
  if (confirm('Are you sure you want to delete this contractor?')) {
    contractors = contractors.filter(c => c.id !== id);
    renderContractorsTable();
    updateSettings();
    alert('Contractor deleted successfully!');
  }
}

function deleteCheckPost(id) {
  if (confirm('Are you sure you want to delete this check post?')) {
    checkPosts = checkPosts.filter(cp => cp.id !== id);
    renderCheckPostsTable();
    updateSettings();
    populateCheckPostSelect();
    
    // Refresh map markers
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    checkPosts.forEach(post => {
      let markerIcon = L.icon({
        iconUrl: post.type === 'Police' ? 'https://cdn.jsdelivr.net/gh/Leaflet/Leaflet@main/dist/images/marker-icon-2x.png' : (post.type === 'Weight Bridge' ? 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-violet.png' : 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-orange.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [2, -32],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41]
      });
      const marker = L.marker([post.latitude, post.longitude], {icon: markerIcon}).addTo(map);
      marker.bindPopup(`
        <div style="color: #000; font-family: sans-serif;">
          <strong style="font-size: 15px; color: #111;">${post.name}</strong><br>
          <span style="font-size: 13px; color: #444;">${post.location} <br/> ${post.address}</span><br>
          <span style="font-size: 12px;">Type: <b>${post.type}</b></span><br>
          <span style="font-size: 12px; color: #00d4ff; font-weight: 600;">Vehicles Today: ${post.vehiclesToday}</span><br>
          <span style="font-size: 12px; color: #222;">Phone: ${post.phone || '-'}<br>Active: <b>${post.active ? 'Yes' : 'No'}</b></span><br>
          <button onclick="showCheckPostVehicles(${post.id})" style="margin-top: 8px; padding: 6px 12px; background: #00d4ff; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">View Vehicles</button>
        </div>
      `);
      markers.push(marker);
    });
    
    alert('Check post deleted successfully!');
  }
}

// View Check Post Details
function viewCheckPostDetails(id) {
  const post = checkPosts.find(p => p.id === id);
  if (!post) return;
  
  const postVehicles = dailyRecords.filter(r => r.checkPost === post.name);
  const totalRevenue = postVehicles.reduce((sum, v) => sum + v.totalPrice, 0);
  
  let html = `
    <div style="margin-bottom: 20px;">
      <h3 style="margin-bottom: 10px; color: #fff;">${post.name}</h3>
      <div style="background: rgba(0, 212, 255, 0.05); padding: 15px; border-radius: 8px; border: 1px solid rgba(0, 212, 255, 0.2);">
        <div style="margin-bottom: 8px;"><strong style="color: #00d4ff;">Type:</strong> <span style="color: #b0b0b0;">${post.type}</span></div>
        <div style="margin-bottom: 8px;"><strong style="color: #00d4ff;">Location:</strong> <span style="color: #b0b0b0;">${post.location}</span></div>
        <div style="margin-bottom: 8px;"><strong style="color: #00d4ff;">Address:</strong> <span style="color: #b0b0b0;">${post.address || '-'}</span></div>
        <div style="margin-bottom: 8px;"><strong style="color: #00d4ff;">Phone:</strong> <span style="color: #b0b0b0;">${post.phone || '-'}</span></div>
        <div style="margin-bottom: 8px;"><strong style="color: #00d4ff;">Coordinates:</strong> <span style="color: #b0b0b0;">${post.latitude.toFixed(4)}, ${post.longitude.toFixed(4)}</span></div>
        <div style="margin-bottom: 8px;"><strong style="color: #00d4ff;">Status:</strong> <span style="color: ${post.active ? '#39ff14' : '#ff6b00'};">${post.active ? 'Active' : 'Inactive'}</span></div>
        <div style="margin-bottom: 8px;"><strong style="color: #00d4ff;">Vehicles Today:</strong> <span style="color: #39ff14; font-weight: 600;">${post.vehiclesToday}</span></div>
        <div><strong style="color: #00d4ff;">Revenue Today:</strong> <span style="color: #39ff14; font-weight: 600;">₹${totalRevenue.toLocaleString()}</span></div>
      </div>
    </div>
    
    <h4 style="margin-bottom: 15px; color: #fff; font-size: 16px;">Vehicles Passed Today</h4>
  `;
  
  if (postVehicles.length === 0) {
    html += '<p style="color: #888;">No vehicles recorded today at this check post.</p>';
  } else {
    html += '<div style="max-height: 300px; overflow-y: auto;">';
    postVehicles.forEach(v => {
      html += `
        <div style="padding: 12px; background: rgba(0, 212, 255, 0.05); border-radius: 8px; margin-bottom: 10px; border: 1px solid rgba(0, 212, 255, 0.2);">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <strong style="color: #00d4ff; font-size: 14px;">${v.vehicleNumber}</strong><br>
              <span style="font-size: 12px; color: #b0b0b0;">Contractor: ${v.contractorName}</span><br>
              <span style="font-size: 12px; color: #b0b0b0;">Sand: ${v.sandQuantity} units @ ₹${v.ratePerUnit}/unit</span><br>
              <span style="font-size: 12px; color: #39ff14; font-weight: 600;">Total: ₹${v.totalPrice}</span>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 11px; color: #888;">${v.timestamp}</span><br>
              <span style="font-size: 11px; color: #00d4ff;">By: ${v.recordedBy}</span>
            </div>
          </div>
        </div>
      `;
    });
    html += '</div>';
  }
  
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Check Post Intelligence</h3>
        <div class="close-modal" onclick="this.closest('.modal').remove()">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="modal-body">
        ${html}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

// Export Functions
function exportToCSV() {
  let csv = 'Vehicle Number,Contractor,Check Post,Sand Quantity,Rate per Unit,Total Price,Timestamp\n';
  
  dailyRecords.forEach(r => {
    csv += `${r.vehicleNumber},${r.contractorName},${r.checkPost},${r.sandQuantity},${r.ratePerUnit},${r.totalPrice},${r.timestamp}\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sand_transport_report.csv';
  a.click();
  window.URL.revokeObjectURL(url);
}

function exportToPDF() {
  alert('PDF export feature will generate a detailed report with all statistics and charts.');
}