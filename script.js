function toggleInput(selectId, inputId) {
    const select = document.getElementById(selectId);
    const input = document.getElementById(inputId);
    input.style.display = (select.value === "MANUAL") ? "block" : "none";
}

function generateScript() {
    const readTitle = document.getElementById('readingTitle').value;
    const pageNum = document.getElementById('pageNumber').value;
    const offTitle = document.getElementById('offeringTitle').value;
    const offName = document.getElementById('offeringName').value;
    const a1T = document.getElementById('a1Title').value;
    const a1N = document.getElementById('assist1').value;
    const a2T = document.getElementById('a2Title').value;
    const a2N = document.getElementById('assist2').value;
    const sTitle = document.getElementById('soloTitle').value;
    const sName = document.getElementById('soloName').value;
    const pTitle = document.getElementById('prayerTitle').value;
    const pName = document.getElementById('prayerName').value;
    
    let group = document.getElementById('groupSongSelect').value;
    if (group === "MANUAL") { group = document.getElementById('manualGroup').value; }
    
    let speaker = document.getElementById('teacherSelect').value;
    if (speaker === "MANUAL") { speaker = document.getElementById('manualSpeaker').value; }

    const isRev = speaker.toLowerCase().includes("rev");
    const pronoun = (speaker.toLowerCase().includes("mrs") || speaker.toLowerCase().includes("ms")) ? "her" : "him";
    
    let closingLogic = `Following the hymn, let us all join together in saying The Lord's Prayer.`;
    if (isRev) {
        closingLogic = `Following the hymn, I would like to invite ${speaker} to pronounce the Benediction. After the benediction, we will sing the Threefold Amen together.`;
    }

    const fullScript = `
1. Hello, good afternoon everyone. To begin our Chapel service. Let me read a scripture and after that I will have opening prayer.

2. [OPENING PRAYER]
Our heavenly Father, we thank you so much for giving us this time. We are grateful to be gather in your presence. Now we start our service, please be with us and guide us from the beginning to the end of this service. We commit our life into Your mighty hands, we pray in Jesus's name, Amen.

3. [RESPONSIVE READING]
Now is the time for responsive reading. Let's all stand up, and please turn to page ${pageNum} of our sacred hymnbook. We will be reading Old Testament passage titled "${readTitle}". <span class="blue-text">(Thank you everyone)</span>.

4. [PRAISE & WORSHIP]
Let's all remain standing up, I would like to invite the music team to lead us in our time of Praise & Worship. <span class="blue-text">(Thank you, music team for your leadership)</span>.

5. [OFFERING & SOLO]
We will now collect our offerings. I would like to call on ${offTitle} ${offName} to commit our offerings to God in prayer; ${a1T} ${a1N} and ${a2T} ${a2N} will assist with collecting the offerings. As we gather our contributions, I would like to invite ${sTitle} ${sName} to sing a solo song. <span class="blue-text">(Thank you everyone for your participation, especially ${sTitle} ${sName} for your beautiful song)</span>.

6. [SPECIAL PRAYER]
Now is the time for special prayer. I would like to invite ${pTitle} ${pName} to lead us in prayer. <span class="blue-text">(Thank you ${pTitle} ${pName} for your special prayer)</span>.

7. [GROUP SONG]
Let us now enjoy a group song by ${group} with a big clap. <span class="blue-text">(Thank you ${group}, may God bless you all)</span>.

8. [THE MESSAGE]
Let us prepare our hearts. I would like to invite ${speaker} to share the Word of God with us. Let's welcome ${pronoun} with a big clap. <span class="blue-text">(Thank you for sharing the Word of God with us. May God bless you more and more)</span>.

9. [CONCLUSION & BENEDICTION]
For our chapel conclusion song, let's stand up and sing together. ${closingLogic} I would like to invite the music team to lead us. 

<div class="admin-divider"></div>
10. [ANNOUNCEMENTS]
Thank you all for your participation in this chapel service. May God bless you all. 
Now is the time for announcement.`;

    document.getElementById('scriptResult').innerHTML = fullScript;
    document.getElementById('scriptContainer').style.display = 'block';
}

function copyText() {
    const range = document.createRange();
    range.selectNode(document.getElementById("scriptResult"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Script copied to clipboard!");
}