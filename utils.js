function requestPushPermission() {
    Notification.requestPermission(function(result) {
        console.log('User Choice', result);
        if (result !== 'granted') {
        console.log('No notification permission granted!');
        } else {
            console.log('Notification permission granted!');
        }
    });
}