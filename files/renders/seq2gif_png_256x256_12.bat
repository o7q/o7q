@echo off
title Generating GIF...

ffmpeg -y -i "%%04d.png" -vf "scale=256:256,palettegen=reserve_transparent=1:max_colors=32" "palette.png"
ffmpeg -framerate 24 -y -i "%%04d.png" -i "palette.png" -lavfi "scale=256:256,paletteuse=alpha_threshold=128" -gifflags -offsetting "sly.gif"

title Done!
rem pause