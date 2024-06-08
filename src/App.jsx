import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GitHubLogoIcon,
  ImageIcon,
  InfoCircledIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";

function App() {
  const usernameInputRef = useRef(null);

  const [username, setUsername] = useState(localStorage.getItem("USERNAME"));
  if (username == undefined) {
    const randomUsername = faker.internet.displayName();
    localStorage.setItem("USERNAME", randomUsername);
    setUsername(randomUsername);
  }
  return (
    <main className="w-screen h-screen flex flex-col">
      <section className="w-full p-8 text-6xl font-bold uppercase text-center tracking-widest">
        Chezz
      </section>
      <section className="w-full h-full p-12 flex justify-between gap-4 items-center max-md:flex-col">
        <div className="flex flex-col items-center">
          <Avatar size={"larger"} variant={"outlined"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="overlay"
            className="relative -top-8 left-8"
          >
            <ImageIcon />
          </Button>
          <div className="flex">
            <Input
              value={username}
              onChange={(e) => {
                localStorage.setItem("USERNAME", e.target.value);
                setUsername(e.target.value ?? "");
              }}
              onBlur={() => {
                if (!username) {
                  const randomUsername = faker.internet.displayName();
                  localStorage.setItem("USERNAME", randomUsername);
                  setUsername(randomUsername);
                }
              }}
              className="rounded-r-none peer border-r-0 transition-all pointer-events-none"
              ref={usernameInputRef}
            />
            <Button
              size="icon"
              variant="secondary"
              className="rounded-l-none border border-l-0 peer-focus-visible:border-ring"
              onClick={() => usernameInputRef.current.focus()}
            >
              <Pencil1Icon />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button size="xxl" variant="accent" className="uppercase font-bold">
            Play against ai
          </Button>
          <Button size="xxl" variant="accent" className="uppercase font-bold">
            Play with friend
          </Button>
          <Button size="xxl" variant="accent" className="uppercase font-bold">
            Play 4 player chess
          </Button>
        </div>
      </section>
      <section className="w-full p-8 flex flex-col items-start">
        <Link to={"/about"}>
          <Button variant="link">
            Github <GitHubLogoIcon className="ml-2" />
          </Button>
        </Link>
        <Link to={"/about"}>
          <Button variant="link">
            About <InfoCircledIcon className="ml-2" />
          </Button>
        </Link>
      </section>
      <img
        src="/knight.png"
        className="fixed -z-10 h-[75vh] w-[63.75vh] left-1/3 top-1/4 opacity-30"
      />
    </main>
  );
}

export default App;
