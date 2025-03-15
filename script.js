function scrollToBlock(event) {
  event.preventDefault()
  const targetId = event.target.getAttribute("href").substring(1)
  const targetElement = document.getElementById(targetId)

  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".slideDescriptionIMG")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          image.classList.add("animate")
          observer.unobserve(image)
        }
      })
    },
    {
      threshold: 1.0,
    }
  )

  observer.observe(image)
})
