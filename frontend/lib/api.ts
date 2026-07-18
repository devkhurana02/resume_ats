import axios from "axios";
import { 
  UploadResponse, 
  StatusResponse, 
  AnalysisResult, 
  RankingResponse 
} from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 60000,
});

export const resumeApi = {
  upload: async (file: File): Promise<UploadResponse> => {
    const form = new FormData();
    form.append("file", file);
    const res = await api.post("/resume/upload", form);
    return res.data;
  },

  getStatus: async (jobId: string): Promise<StatusResponse> => {
    const res = await api.get(`/resume/${jobId}/status`);
    return res.data;
  },

  get: async (jobId: string) => {
    const res = await api.get(`/resume/${jobId}`);
    return res.data;
  }
};

export const jdApi = {
  uploadText: async (jdText: string): Promise<{ jd_job_id: string, role_title: string }> => {
    const form = new FormData();
    form.append("jd_text", jdText);
    try {
      const res = await api.post("/jd/upload", form, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      return res.data;
    } catch (err: any) {
      console.error("JD upload error:", err?.response?.status, err?.response?.data);
      throw err;
    }
  },

  uploadFile: async (file: File): Promise<{ jd_job_id: string, role_title: string }> => {
    const form = new FormData();
    form.append("file", file);
    try {
      const res = await api.post("/jd/upload", form, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      return res.data;
    } catch (err: any) {
      console.error("JD file upload error:", err?.response?.status, err?.response?.data);
      throw err;
    }
  }
};


export const analyzeApi = {
  start: async (resumeJobId: string, jdJobId: string) => {
    const res = await api.post("/analyze/", {
      resume_job_id: resumeJobId,
      jd_job_id: jdJobId
    });
    return res.data;
  },

  getStatus: async (resumeJobId: string): Promise<StatusResponse> => {
    const res = await api.get(`/analyze/${resumeJobId}/status`);
    return res.data;
  },

  getResult: async (resumeJobId: string): Promise<AnalysisResult> => {
    const res = await api.get(`/analyze/${resumeJobId}`);
    return res.data;
  }
};

export const rankApi = {
  rank: async (jdJobId: string, resumeJobIds: string[]): Promise<RankingResponse> => {
    const res = await api.post("/rank/", {
      jd_job_id: jdJobId,
      resume_job_ids: resumeJobIds
    });
    return res.data;
  }
};

export const reportApi = {
  getReportUrl: (resumeJobId: string) =>
    `${API_BASE}/report/${resumeJobId}`,
};
