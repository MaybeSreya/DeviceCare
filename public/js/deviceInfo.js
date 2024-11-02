async function fetchIPInfo() {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return {
        ip: data.ip,
        country: data.country_name,
    };
}

async function fetchDeviceInfo() {
    const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        localTime: new Date().toLocaleString(),
        language: navigator.language,
    };

    if ('getBattery' in navigator) {
        const battery = await navigator.getBattery();
        deviceInfo.batteryLevel = battery.level * 100 + '%';
        deviceInfo.isCharging = battery.charging;
    }

    const ipInfo = await fetchIPInfo();
    deviceInfo.ip = ipInfo.ip;
    deviceInfo.country = ipInfo.country;

    return deviceInfo;
}

fetchDeviceInfo().then((data) => {
    fetch('/api/device-info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
});
