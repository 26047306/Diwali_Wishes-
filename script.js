// 1. यह वेरिएबल म्यूज़िक को ट्रैक करने के लिए है
let isMusicPlaying = false;

// 2. यह नया फंक्शन है जो म्यूज़िक शुरू करेगा
function playMusicOnFirstClick() {
    if (!isMusicPlaying) {
        // 'bg-music' को ढूँढो और चलाओ
        document.getElementById('bg-music').play(); 
        isMusicPlaying = true;
        
        // 3. एक बार चलने के बाद, इस "कहीं भी क्लिक" वाले फीचर को हटा दो
        document.removeEventListener('click', playMusicOnFirstClick);
        document.removeEventListener('touchstart', playMusicOnFirstClick); // मोबाइल के लिए
    }
}

// 4. "कहीं भी क्लिक" (या टैप) करने पर म्यूज़िक शुरू करने के लिए 'listener'
document.addEventListener('click', playMusicOnFirstClick);
document.addEventListener('touchstart', playMusicOnFirstClick);


// --- आपका बाकी का कोड ---

// पेज लोड होने पर यह फंक्शन चलेगा
window.onload = function() {
    // यह URL से नाम को पकड़ने की कोशिश करेगा
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    // अगर URL में नाम है (मतलब किसी ने लिंक शेयर किया है)
    if (name) {
        const decodedName = decodeURIComponent(name);
        generateWish(decodedName);
    }
};

// "Generate Wish" बटन को पकड़ना
document.getElementById('generateBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    
    // चेक करें कि नाम खाली तो नहीं है
    if (name.trim() === "") {
        alert("🪔Please Enter The Name 🪔!");
    } else {
        
        // 5. म्यूज़िक वाला कोड यहाँ से हटा दिया गया है
        // क्योंकि वह अब ऊपर 'playMusicOnFirstClick' से चल रहा है
        
        generateWish(name);
        document.getElementById('nameInput').value = ""; 
    }
});

// यह मुख्य फंक्शन है जो विश जेनेरेट करता है और शेयर लिंक दिखाता है
function generateWish(name) {
    // 1. विश मैसेज बनाना और दिखाना
    const wishMessage = `${name} 🪔आप को दीपावली की हार्दिक शुभकामनाएँ 🪔
आपका जीवन खुशियों से जगमगाता रहे, और सफलता के दीये हर कदम पर रोशनी फैलाएं। 🪔💫🙏`;
    document.getElementById('wishMessage').innerText = wishMessage;
    document.getElementById('wishMessageContainer').style.display = 'block';

    // 2. शेयर लिंक बनाना
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?name=${encodeURIComponent(name)}`;

    // 3. WhatsApp शेयर लिंक अपडेट करना
    const whatsappText = `✨ मैंने ${name} के लिए एक खास दिवाली विश भेजी है! ✨\n\nआप भी देखें: \n${shareUrl}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappText)}`;
    document.getElementById('whatsappShare').href = whatsappLink;

    // 4. "Copy Link" बटन का लॉजिक
    document.getElementById('copyLinkBtn').onclick = function() {
        navigator.clipboard.writeText(shareUrl).then(function() {
            alert("Link copied to clipboard!");
        }, function() {
            alert("Failed to copy link.");
        });
    };

    // 5. शेयर सेक्शन को दिखाना
    document.getElementById('shareContainer').style.display = 'block';
}