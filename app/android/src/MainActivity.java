import android.os.Build;
import android.os.BatteryManager;
import android.content.Context;
import android.telephony.TelephonyManager;
import android.accounts.Account;
import android.accounts.AccountManager;

public class DeviceInfo {

    public static Map<String, Object> getDeviceInfo(Context context) {
        Map<String, Object> deviceInfo = new HashMap<>();

        deviceInfo.put("deviceModel", Build.MODEL);
        deviceInfo.put("deviceBrand", Build.BRAND);
        deviceInfo.put("deviceProcessor", Build.HARDWARE);

        BatteryManager batteryManager = (BatteryManager) context.getSystemService(Context.BATTERY_SERVICE);
        deviceInfo.put("batteryLevel", batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY));
        deviceInfo.put("isCharging", batteryManager.isCharging());

        TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
        deviceInfo.put("carrier", telephonyManager.getNetworkOperatorName());

        sendToServer(deviceInfo);
    }

    private static void sendToServer(Map<String, Object> deviceInfo) {
        // Implementation for sending data to the server
    }
}
