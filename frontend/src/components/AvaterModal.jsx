import React, { useState } from 'react';
import api from "../api/axios";
import { useAuthStore } from "../store/authStore";
import Loading from '../components/Loading';

const AvatarModal = ({ isOpen, onClose, currentAvatar, hasImage }) => {
  const [img, setImg] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleUpload = async () => {
    if (!img) {
      alert("Please select an image first");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("profileImage", img);

      const res = await api.post(
        "/api/user/upload-avatar",
        formData
      );

      if (res.data.success) {
        useAuthStore.getState().updateAvatar(res.data.imageUrl);
        setImg(false);
        onClose();
      }
      
    } catch (err) {
      console.error(err);
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure remove profile image?")) {
      return;
    }

    try {
      setLoading(true);
      const res = await api.delete("/api/user/delete-avatar");

      if (res.data.success) {
        useAuthStore.getState().updateAvatar("");
        onClose();
      }
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-80">

        <h3 className="font-semibold mb-4 text-center">
          Profile Picture
        </h3>

        {/* avatar preview */}
        <div className="flex justify-center mb-4">
          <div className="w-30 h-30 lg:w-50 lg:h-50 rounded-full overflow-hidden border shadow">
            <img
              src={hasImage ? currentAvatar : img ? URL.createObjectURL(img) : currentAvatar}
              className="w-full h-full object-cover"
              alt="Profile preview"
            />
          </div>
        </div>

        {/* file input */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
          disabled={hasImage}
          className={`w-full mb-4 text-sm
            ${hasImage ? "hidden" : ""}
          `}
        />

        {/* buttons */}
        <div className="flex justify-end gap-3">

          <button
            onClick={() => { onClose(); setImg(false); }}
            className="px-4 py-2 rounded-lg bg-gray-200"
            disabled={loading}
          >
            Cancel
          </button>

          {hasImage ? (
            <button
              onClick={handleDelete}
              className="px-4 py-2 rounded-lg bg-red-500 text-white"
              disabled={loading}
            >
              Delete
            </button>
          ) : (
            <button
              className="px-4 py-2 rounded-lg bg-theme text-white"
              onClick={handleUpload}
              disabled={loading || !img}
            >
              Upload
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default AvatarModal;