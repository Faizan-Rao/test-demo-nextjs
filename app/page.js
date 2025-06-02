import Image from "next/image";
import {
  RefreshCcw,
  Send,
  StickyNote,
  Sparkle,
  Paperclip,
  Smile,
  AtSign,
  SquareSlash,
  Sparkles,
} from "lucide-react";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="  flex flex-col justify-center items-center gap-4">
        <div className="rounded-xl sm:max-w-[80%] md:max-w-[60%] w-full p-3 bg-[#eaf2ff]">
          <div className="flex justify-between py-2">
            <div className="flex gap-2">
              <h1 className="font-semibold text-sm">Vanilla AI</h1>
              <span className="text-[#999999] text-xs">Suggested</span>
            </div>

            <div className="flex gap-2">
              <RefreshCcw width={16} height={16} strokeWidth={1.7} />
              <span className="font-semibold text-xs">Regenerate</span>
            </div>
          </div>

          <p className="text-sm">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            perferendis molestias cupiditate quo, facilis aliquam dignissimos,
            maiores possimus facere, quam velit maxime tempore? Aliquam
            necessitatibus delectus tempora tenetur eligendi. Doloribus ratione
            molestias reiciendis.
          </p>

          <div className="font-semibold cursor-pointer text-sm border-b-[1px] justify-self-start pt-2">
            Reply with this message
          </div>
        </div>

        <div className="rounded-xl sm:max-w-[80%] md:max-w-[60%] w-full  border-[1px] border-[#999999b1] p-3 shadow-lg">
          <input
            type="text"
            className="w-full text-sm outline-none border-none py-2 pb-4"
            placeholder="Type your message here"
          />
          <div className="flex justify-between py-1">
            <div className="flex gap-4">
              <div className="flex gap-4 border-r-[2px] border-[#99999951] items-center justify-center pr-4">
                <StickyNote
                  width={20}
                  className="text-[#62636c] "
                  height={20}
                  strokeWidth={1.7}
                />
                <Sparkle
                  width={20}
                  className="text-[#62636c] "
                  height={20}
                  strokeWidth={1.7}
                />
                <Paperclip
                  width={20}
                  className="text-[#62636c] "
                  height={20}
                  strokeWidth={1.7}
                />
                <Smile
                  width={20}
                  className="text-[#62636c] "
                  height={20}
                  strokeWidth={1.7}
                />
                <AtSign
                  width={20}
                  className="text-[#62636c] "
                  height={20}
                  strokeWidth={1.7}
                />
                <SquareSlash
                  width={20}
                  className="text-[#62636c] "
                  height={20}
                  strokeWidth={1.7}
                />
              </div>

              <div className="flex justify-center items-center gap-2">
                <Sparkles
                  width={20}
                  className="text-[#62636c] "
                  height={20}
                  strokeWidth={1.7}
                />
                <span className="font-semibold text-sm text-[#62636c] text-wrap">Quick reply with AI</span>

              </div>
            </div>
            <div className="cursor-pointer bg-[#eff0f3] rounded-md p-2">
              <Send
                width={20}
                className="text-[#62636c] "
                height={20}
                strokeWidth={1.7}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
