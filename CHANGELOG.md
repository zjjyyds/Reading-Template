# Changelog

All notable changes to this project will be documented in this file.

## [2026-07-26] - UI and Data Parsing Improvements
### Added
- **Vocabulary Variants Support**: `src/types.ts` now supports `variants` for vocabulary items, allowing plural forms, past tenses, and gerunds to be properly highlighted in the text.
- **Regular Expression Safety**: Special characters in vocabulary words are now properly escaped using `escapeRegExp` in `ArticleReader.tsx` before generating highlighting logic, preventing rendering crashes.
- **Agent Guide**: Created a `README.md` guiding AI agents on how to ingest text and translate it into a structured `src/sampleData.ts` adhering to the standard of "考研英语一".

### Fixed
- **Read Aloud Controls**: Improved the read aloud logic. Clicking the volume icon starts the TTS. Clicking the "stop/square" icon gracefully cancels the current speech queue and resets the state.
- **Layout Overlap**: Fixed a UI issue where the paragraph index indicator (e.g., P1, P2) overlapped with the text-to-speech button. They are now placed neatly side by side using a flex container.
