(function setGlowEffectRx() {
    const glowEffects = document.querySelectorAll('.glow-effect')

    glowEffects.forEach(glowEffects => {
        const glowLines = glowEffects.querySelectorAll('rect')
        const rx = getComputedStyle(glowEffects).borderRadius;

        glowLines.forEach(Line => {
            Line.setAttribute('rx', rx)
        })
    })
})()