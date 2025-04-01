#!/bin/bash

# File konfigurasi
CONFIG_FILE="config.json"


# Periksa apakah file config.json ada
if [ ! -f "$CONFIG_FILE" ]; then
  echo "File $CONFIG_FILE tidak ditemukan!"
  exit 1
fi

# Mengambil konfigurasi menggunakan jq
USERNAME=$(jq -r '.username' "$CONFIG_FILE")
EMAIL=$(jq -r '.email' "$CONFIG_FILE")
TOKEN=$(jq -r '.token' "$CONFIG_FILE")
REMOTE=$(jq -r '.remote' "$CONFIG_FILE")
BRANCH=$(jq -r '.branch' "$CONFIG_FILE")

# Pastikan nilai dari config.json tidak kosong
if [ -z "$USERNAME" ] || [ -z "$EMAIL" ] || [ -z "$REMOTE" ] || [ -z "$BRANCH" ]; then
  echo "Error: Konfigurasi di config.json tidak lengkap!"
  exit 1
fi


# Atur konfigurasi Git sesuai dengan config.json
git config --global user.name "$USERNAME"
git config --global user.email "$EMAIL"
git config --global --add safe.directory "$(pwd)"

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
