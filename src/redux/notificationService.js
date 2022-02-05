import axios from 'axios';
import {
  sendNotificationToAllRequest,
  storeUserSubscriptionToken,
} from './serviceApi';

export async function createNotificationSubscription(userId) {
  // wait for service worker installation to be ready
  const serviceWorker = await navigator.serviceWorker.ready;
  // subscribe and return the subscription
  const subscription = await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:
      'BGBsEn1FdQ6SESB2ak0LmME-FA6dz8M3xDzXAVXmxdyCN3iIdLD6bjs8BkGAYi9BnrZZsi3uvAZd0nNB_JUlrx0',
  });
  console.log('USER ID', userId);
  console.log('token', subscription);
  storeUserSubscriptionToken(userId, subscription);
}

export async function sendNotificationToAll(recipeName, recipeId) {
  const res = await sendNotificationToAllRequest(recipeName, recipeId);
  if (res.data.success) {
    console.log('SUCCESSFULLY SEND NOTIFICATIONS');
  }
}
