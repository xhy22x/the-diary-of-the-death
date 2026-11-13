import Image from "next/image"
import Link from "next/link"
import { getI18n, getScopedI18n } from "@/locales/server"

export default async function Home() {
  const t = await getI18n()
  {/*const scopedT = await getScopedI18n('')*/}
  return (
    <main className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_220px] items-start px-4 py-10 md:gap-15 md:px-10">
      
      <section id="stories" className="border-1 border-black space-y-4">
        <article className="story-card">
          <Image src="/stories/I.png" alt="stories I" width={250} height={500} />
          <div className="story-content">
            <ul>
              <li><Link href="">Chapters I : ...</Link></li>
              <li><Link href="">Chapters II : ...</Link></li>
              <li><Link href="">Chapters III : ...</Link></li>
              <li><Link href="">Chapters IV : ...</Link></li>
              <li><Link href="">...</Link></li>
            </ul>
          </div>
        </article>
        <article className="story-card">
          <Image src="/stories/I.png" alt="stories I" width={150} height={300} />
          <div className="story-content">
            <ul>
              <li><Link href="">Chapters I : ...</Link></li>
              <li><Link href="">Chapters II : ...</Link></li>
              <li><Link href="">Chapters III : ...</Link></li>
              <li><Link href="">Chapters IV : ...</Link></li>
              <li><Link href="">...</Link></li>
            </ul>
          </div>
        </article>
      </section>


      <aside id="characters" className="border-1 border-black space-y-3">
          <h2>Monsters</h2>
          <article>
            <Link href="">
              <Image src="/characters/the_monster_in_cam.jpg" alt="The monster in cam" width={500} height={500} />
              <h3>The monster in cam</h3>
              <p>This is a previsual of a vengeful spirit.</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <Image src="/characters/the_death_dolls.jpg" alt="The deatb dolls" width={500} height={500} />
              <h3>The death dolls</h3>
              <p>This is a previsual of a ghost or a revenant.</p>
            </Link>
          </article>
          <article>
            <Link href="">
              <Image src="/characters/the_corrupt_fire_clown.jpg" alt="The corrupt fire clown" width={500} height={500} />
              <h3>The corrupt fire clown</h3>
              <p>This is a previsual of a parasite.</p>
            </Link>
          </article>

      </aside>

    </main>
  );
}