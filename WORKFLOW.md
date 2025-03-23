Filter Modal Workflow

Overview

This document explains the approach used for managing filters and selected options in the filter modal window. The modal allows users to select filters, preview their choices, and either confirm or discard changes.

Data Structure

1. initialFilters

Fetched using React Query from a JSON file.

Represents all available filters displayed in the modal.

2. filtersStore

Stores confirmed filters that the user has applied.

The source of truth for the saved selections.

3. selectedOptions

Tracks user interactions within the modal.

Temporarily holds selected filter options.

Updates in real-time when checkboxes are checked/unchecked.