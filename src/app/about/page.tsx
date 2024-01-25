interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <main className='prose mt-32 text-pretty'>
      <ul>
        <li>General info about me</li>
      </ul>
      <ul>
        <li>
          My history with design
          <ul>
            <li>picked it up during COVID by learning Illustrator</li>
            <li>started with just UIs - mobile apps and websites</li>
            <li>explored a bit of icon design</li>
            <li>
              always been strongly drawn to typography, tried designing fonts
            </li>
            <li>designed a few logos, especially lately</li>
            <li>
              lately got interested in branding and creative direction a lot, as
              well as more freeform design like posters, illustrations,
              lettering
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          What I do as a designer now
          <ul>
            <li>web and app design</li>
            <li>static web dev</li>
            <li>icon design</li>
            <li>
              brand design
              <ul>
                <li>logos & logo systems</li>
                <li>color palette & typography</li>
                <li>print assets - business cards, invoices, folders, etc.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          What I would like to try in the future
          <ul>
            <li>
              creative direction - brand voice, photography, video; holistic
              control over the consistency and quality of the brand&apos;s
              content
            </li>
            <li>typeface design</li>
            <li>motion design</li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
