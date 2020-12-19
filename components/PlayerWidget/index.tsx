import React, { useContext, useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";

import styles from "./styles";
import { Sound } from "expo-av/build/Audio";

const song = {
  id: "1",
  uri:
    "https://drive.google.com/file/d/1qSb6ioTOrgfeECiMEPxhv8KN1I23a4Uy/view?usp=sharing",
  imageUri: "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
  title: "Widget Msic",
  artist: "Ada",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync(); //! play only one song at a time
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };
  useEffect(() => {
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}> {song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={25} color={"white"} />
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={25}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
