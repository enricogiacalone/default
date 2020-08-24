import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { Platform } from "react-native";

class NotificationManager {
  configure = () => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("[NotificationManager] onRegister TOKEN:", token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log(
          "[NotificationManager] onNotification NOTIFICATION:",
          notification
        );

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });
  };

  _buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id,
      autocancel: true,
      largeIcon: options.largeIcon || "ic_launcer",
      smallIcon: options.smallIcon || "ic_launcer",
      bigText: message || "",
      subText: title || "",
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.vibration || "high",
      importance: options.importance || "high",
      data: data,
    };
  };

  _buildAIOSNotification = (id, title, message, data = {}, options = {}) => {
    return {
      alertAction: options.alertAction || "view",
      category: options.category || "",
      userInfo: {
        id: id,
        item: data,
      },
    };
  };

  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      /* Android only properties */
      ...this._buildAndroidNotification(id, title, message, data, options),
      /* IOS only properties */
      ...this._buildAIOSNotification(id, title, message, data, options),
      /* IOS and Android properties */
      title: title || "",
      message: message || "",
      playSound: options.playSound || false,
      soundName: options.soundName || "default",
      userInteraction: false, // if the notification was opened by the user
    });
  };

  unRegister = () => {
    PushNotification.unregister();
  };
}

export const notificationManager = new NotificationManager();
