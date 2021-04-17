import firebase, { RNFirebase } from "react-native-firebase"
import { Platform } from "react-native"

/**
 * In order to use this module import the class in the root container.
 * Invoke the setUp method with your credentials
 * Call the methods needed for your application. Good luck!
 */

interface Channel {
  channelId: string
  name: string
  importance: RNFirebase.notifications.Android.Importance
}

export default class NotificationListener {
  /**
   * Creates an Android channel
   * @param channel: Channel ( channelId, name, importance )
   * Check the firebase documentation for more details about importance.
   */
  static createAndroidChannel(channel: Channel) {
    const androidChannel = new firebase.notifications.Android.Channel(
      channel.channelId,
      channel.name,
      channel.importance,
    ).setDescription("A natural description of the channel")
    return firebase.notifications().android.createChannel(androidChannel)
  }

  /**
   * Displays the notification when the app is opened.
   * @param notification: any ( Received notification )
   * @param channelId: string ( Your channel id )
   */
  static display(notification, channelId: string) {
    if (Platform.OS === "android") {
      const localNotification = new firebase.notifications.Notification()
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setBody(notification.body)
        .setData(notification.data)
        .android.setChannelId(channelId)

      firebase
        .notifications()
        .displayNotification(localNotification)
        // tslint:disable-next-line:no-console
        .catch(err => console.error(err))
    } else if (Platform.OS === "ios") {
      firebase
        .notifications()
        .displayNotification(notification)
        // tslint:disable-next-line:no-console
        .catch(err => console.error(err))
    }
  }

  /**
   * Listener for notification.
   * @param channelId: string ( Your channel id )
   * Add logic here if the app should do something when the notification is received.
   */
  // static listen(channelId: string) {
  //   firebase.notifications().onNotification(notification => {
  //       this.display(notification, channelId)
  //   })
  // }

  /**
   * Request permissions
   */
  static requestPermission() {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (!enabled) {
          firebase
            .messaging()
            .requestPermission()
            // tslint:disable-next-line: no-console
            .then(() => console.log("User has autorize"))
            // tslint:disable-next-line: no-console
            .catch(() => console.log("User has rejected permission"))
        }
      })
  }

  /**
   * Fast start for the setUp. Should be called in the RootContainer first thing.
   * @param channel: Channel ( channelId, name, importance )
   */
  static async setUp(channel: Channel) {
    await this.createAndroidChannel(channel)
    // this.listen(channel.channelId)
    this.requestPermission()
  }

  static create(id, title, description, data, channelId) {
    return new firebase.notifications.Notification()
      .setNotificationId(id)
      .setTitle(title)
      .setBody(description)
      .setData(data)
      .android.setChannelId(channelId)
  }

  static schedule(notification, fireDate) {
    firebase.notifications().scheduleNotification(notification, { fireDate: fireDate.getTime() })
  }

  static removeAllDeliveredNotifications() {
    return firebase.notifications().removeAllDeliveredNotifications()
  }

  /**
   * This should be called in Root Container
   * @param callback
   */
  static onNotificationOpened(callback) {
    return firebase.notifications().onNotificationOpened(callback)
  }

  /**
   * This should be called in launchApp method. If the returned value is not null handle the way you want to.
   */
  static onNotificationOpenedAppClose() {
    return firebase.notifications().getInitialNotification()
  }

  static getInitial() {
    return firebase.notifications().getInitialNotification()
  }

  static cancelById(id) {
    return firebase.notifications().cancelNotification(id)
  }

  static getSchedule() {
    return firebase.notifications().getScheduledNotifications()
  }

  static subscribeToTopic(topic: string) {
    return firebase.messaging().subscribeToTopic(topic)
  }

  static unsubscribeFromTopic(topic: string) {
    return firebase.messaging().unsubscribeFromTopic(topic)
  }

  static onTokenRefreshListener(listener: (token: string) => any) {
    return firebase.messaging().onTokenRefresh(listener)
  }

  static setBadge(notifications: number) {
    return firebase.notifications().setBadge(notifications)
  }

  static getToken() {
    return firebase.messaging().getToken()
  }
}
