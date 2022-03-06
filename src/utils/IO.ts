import * as Fs from "@tauri-apps/api/fs";
import * as Os from "@tauri-apps/api/os";
import * as Path from "@tauri-apps/api/path";

export class Serialization {
  public static serialize(obj: {}): string {
    return JSON.stringify(obj, null, 2);
  }

  public static deserialize<T>(json: string): T {
    return JSON.parse(json) as T;
  }
}

export class IO {
  static async getAppDir() {
    return await Path.appDir();
  }
}
