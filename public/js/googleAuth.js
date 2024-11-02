<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>
  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const googleInfo = {
        name: profile.getName(),
        email: profile.getEmail(),
    };
    fetch('/api/google-info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(googleInfo),
    });
  }
</script>
<div class="g-signin2" data-onsuccess="onSignIn"></div>
