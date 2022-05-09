import Particles from 'react-tsparticles'

const MParticles = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: '#00000000',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: '#89a3ff',
          },
          links: {
            enable: false,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 150,
            },
            value: 20,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'star',
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: false,
      }}
    />
  )
}

export default MParticles
