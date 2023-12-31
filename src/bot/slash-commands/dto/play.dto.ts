import { Param } from "@discord-nestjs/core";
import { Transform } from "class-transformer";

export class PlayDto {
  @Param({
    name: "song",
    description:
      "Name or URL of song/playlist. Could be from (Youtube, Spotify, SoundCloud)",
    required: true,
  })
  song: string;
}
