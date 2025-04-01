#!/bin/bash

# Menambahkan repository ke daftar safe directory
git config --global --add safe.directory "D:/laragon/www/malw"

# File konfigurasi
CONFIG_FILE="config.json"

# Periksa apakah file config.json ada
if [ ! -f "$CONFIG_FILE" ]; then
  echo "File $CONFIG_FILE tidak ditemukan!"
  exit 1
fi

# Mengambil konfigurasi menggunakan jq
USERNAME=$(jq -r '.username' "$CONFIG_FILE")
TOKEN=$(jq -r '.token' "$CONFIG_FILE")
REMOTE=$(jq -r '.remote' "$CONFIG_FILE")
BRANCH=$(jq -r '.branch' "$CONFIG_FILE")

# Membuat URL remote dengan menyisipkan kredensial (hanya untuk HTTPS)
GIT_REMOTE_URL=$(echo "$REMOTE" | sed "s|https://|https://${USERNAME}:${TOKEN}@|")

# Set remote origin ke URL yang sudah dimodifikasi
git remote set-url origin "$GIT_REMOTE_URL"

# Periksa apakah pesan commit diberikan sebagai argumen
if [ -z "$1" ]; then
  echo "Usage: $0 \"pesan commit\""
  exit 1
fi

# Menambahkan semua perubahan (termasuk file yang dihapus), commit, dan push ke repository
git add -A
git commit -m "$1"
git push origin "$BRANCH"

echo "Perubahan berhasil di-upload ke GitHub."
