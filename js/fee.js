const uk = document.getElementById('uk')
const uae = document.getElementById('uae')
const aus = document.getElementById('aus')
const eu = document.getElementById('eu')
const usa = document.getElementById('usa')

const m1 = document.getElementById('m1')
const m2 = document.getElementById('m2')
const m3 = document.getElementById('m3')
const m4 = document.getElementById('m4')


uk.addEventListener('click',()=>{
    uk.style.backgroundColor = 'green'
    uk.style.color = 'white'

    m1.textContent = '£40 / Month'
    m2.textContent = '£35 / Month'
    m3.textContent = '£30 / Month'
    m4.textContent = '£25 / Month'

    uae.style.backgroundColor = 'transparent'
    uae.style.color = 'black'

    usa.style.backgroundColor = 'transparent'
    usa.style.color = 'black'

    aus.style.backgroundColor = 'transparent'
    aus.style.color = 'black'

    eu.style.backgroundColor = 'transparent'
    eu.style.color = 'black'
})


usa.addEventListener('click',()=>{
    usa.style.backgroundColor = 'green'
    usa.style.color = 'white'

    m1.textContent = '45$ / Month'
    m2.textContent = '40$ / Month'
    m3.textContent = '35$ / Month'
    m4.textContent = '25$ / Month'

    uae.style.backgroundColor = 'transparent'
    uae.style.color = 'black'

    uk.style.backgroundColor = 'transparent'
    uk.style.color = 'black'

    aus.style.backgroundColor = 'transparent'
    aus.style.color = 'black'

    eu.style.backgroundColor = 'transparent'
    eu.style.color = 'black'
})



uae.addEventListener('click',()=>{
    uae.style.backgroundColor = 'green'
    uae.style.color = 'white'

    
    m1.textContent = '165 درهم / Month'
    m2.textContent = '150 درهم / Month'
    m3.textContent = '130 درهم / Month'
    m4.textContent = '90 درهم / Month'

    uk.style.backgroundColor = 'transparent'
    uk.style.color = 'black'

    usa.style.backgroundColor = 'transparent'
    usa.style.color = 'black'

    aus.style.backgroundColor = 'transparent'
    aus.style.color = 'black'

    eu.style.backgroundColor = 'transparent'
    eu.style.color = 'black'
})



aus.addEventListener('click',()=>{
    aus.style.backgroundColor = 'green'
    aus.style.color = 'white'
    
    m1.textContent = '70A$ / Month'
    m2.textContent = '63A$ / Month'
    m3.textContent = '55A$ / Month'
    m4.textContent = '40A$ / Month'

    uae.style.backgroundColor = 'transparent'
    uae.style.color = 'black'

    usa.style.backgroundColor = 'transparent'
    usa.style.color = 'black'

    uk.style.backgroundColor = 'transparent'
    uk.style.color = 'black'

    eu.style.backgroundColor = 'transparent'
    eu.style.color = 'black'
})



eu.addEventListener('click',()=>{
    eu.style.backgroundColor = 'green'
    eu.style.color = 'white'

    m1.textContent = '43€ / Month'
    m2.textContent = '37€ / Month'
    m3.textContent = '31€ / Month'
    m4.textContent = '22€ / Month'

    uae.style.backgroundColor = 'transparent'
    uae.style.color = 'black'

    usa.style.backgroundColor = 'transparent'
    usa.style.color = 'black'

    aus.style.backgroundColor = 'transparent'
    aus.style.color = 'black'

    uk.style.backgroundColor = 'transparent'
    uk.style.color = 'black'
})